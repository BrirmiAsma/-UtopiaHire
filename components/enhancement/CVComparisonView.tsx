'use client';

import { FileText, Download, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface HighlightedSection {
  text: string;
  isHighlighted: boolean;
  type?: 'removed' | 'added' | 'modified';
}

interface CVComparisonViewProps {
  originalCV: HighlightedSection[];
  enhancedCV: HighlightedSection[];
  fileName: string;
  onClose?: () => void;
}

export default function CVComparisonView({
  originalCV,
  enhancedCV,
  fileName,
  onClose,
}: CVComparisonViewProps) {
  const renderCVContent = (sections: HighlightedSection[], isOriginal: boolean) => {
    return (
      <>
        {sections.map((section, index) => {
          if (section.isHighlighted) {
            return (
              <mark
                key={index}
                className={`inline px-1 py-0.5 rounded ${
                  isOriginal
                    ? 'bg-red-100 text-red-900 border border-red-300'
                    : 'bg-green-100 text-green-900 border border-green-300'
                }`}
              >
                {section.text}
              </mark>
            );
          }
          return <span key={index}>{section.text}</span>;
        })}
      </>
    );
  };

  const handleDownload = (content: HighlightedSection[], filename: string) => {
    const text = content.map((s) => s.text).join('');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = async (content: HighlightedSection[], filename: string) => {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = margin;
    const lineHeight = 6;
    const sectionSpacing = 4;

    // Process content sections
    content.forEach((section, index) => {
      let text = section.text;
      const isHeading = text.trim().toUpperCase() === text.trim() && 
                        text.trim().length < 50 && 
                        !text.includes('\n') &&
                        text.trim().length > 0;

      // Check if we need a new page
      if (yPosition > pageHeight - margin - 30) {
        doc.addPage();
        yPosition = margin;
      }

      if (isHeading) {
        // Format as heading
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(45, 55, 72);
        yPosition += 8; // Extra spacing before heading
        doc.text(text.trim(), margin, yPosition);
        yPosition += 6;
      } else {
        // Regular text
        const lines = doc.splitTextToSize(text, maxWidth);
        
        // Check page break for multi-line text
        if (yPosition + lines.length * lineHeight > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }

        // Set text color and style based on highlighting
        if (section.isHighlighted) {
          doc.setFontSize(11);
          doc.setTextColor(34, 139, 34); // Green color for enhanced sections
          doc.setFont('helvetica', 'bold');
        } else {
          doc.setFontSize(10);
          doc.setTextColor(45, 55, 72); // Dark gray for normal text
          doc.setFont('helvetica', 'normal');
        }

        // Add text
        doc.text(lines, margin, yPosition, {
          maxWidth: maxWidth,
          align: 'left',
        });

        yPosition += lines.length * lineHeight + sectionSpacing;

        // Reset to normal font after highlighted section
        if (section.isHighlighted) {
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(45, 55, 72);
          doc.setFontSize(10);
        }
      }
    });

    // Save the PDF
    const pdfFilename = filename.replace('.txt', '.pdf').replace('.pdf', '') + '.pdf';
    doc.save(pdfFilename);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#38A169] to-[#48BB78] rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2D3748]">CV Enhancement Results</h2>
            <p className="text-sm text-[#2D3748]/70">{fileName}</p>
          </div>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Original CV */}
        <Card className="h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#2D3748] flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Original CV
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownload(originalCV, `${fileName}-original.txt`)}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="bg-[#F7FAFC] rounded-lg p-6 border border-[#E2E8F0] max-h-[600px] overflow-y-auto">
            <div className="text-sm text-[#2D3748] leading-relaxed whitespace-pre-wrap">
              {renderCVContent(originalCV, true)}
            </div>
          </div>
          <p className="text-xs text-[#2D3748]/50 mt-3">
            <span className="inline-block w-3 h-3 bg-red-100 border border-red-300 rounded mr-2"></span>
            Highlighted sections will be modified
          </p>
        </Card>

        {/* Enhanced CV */}
        <Card className="h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-[#2D3748] flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Enhanced CV
            </h3>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleDownloadPDF(enhancedCV, `${fileName}-enhanced`)}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
          <div className="bg-[#F7FAFC] rounded-lg p-6 border border-[#E2E8F0] max-h-[600px] overflow-y-auto">
            <div className="text-sm text-[#2D3748] leading-relaxed whitespace-pre-wrap">
              {renderCVContent(enhancedCV, false)}
            </div>
          </div>
          <p className="text-xs text-[#2D3748]/50 mt-3">
            <span className="inline-block w-3 h-3 bg-green-100 border border-green-300 rounded mr-2"></span>
            Highlighted sections are improvements
          </p>
        </Card>
      </div>
    </div>
  );
}

