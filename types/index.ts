import { LucideIcon } from 'lucide-react';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
