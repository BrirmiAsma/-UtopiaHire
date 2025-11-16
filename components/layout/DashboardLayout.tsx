import Sidebar from './Sidebar';
import ChatbotButton from '@/components/chatbot/ChatbotButton';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      <Sidebar />
      <main className="lg:ml-80 min-h-screen">
        {children}
      </main>
      <ChatbotButton />
    </div>
  );
}
