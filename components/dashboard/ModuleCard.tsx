import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export default function ModuleCard({ title, description, icon: Icon, href, color }: ModuleCardProps) {
  return (
    <Link href={href}>
      <Card hover className="h-full group">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-[#2D3748] mb-2 group-hover:text-[#2C7A7B] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#2D3748]/70 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center gap-2 text-[#2C7A7B] font-medium group-hover:gap-3 transition-all">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </div>
      </Card>
    </Link>
  );
}
