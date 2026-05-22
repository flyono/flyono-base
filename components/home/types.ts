import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface HomeGridProps {
  children: ReactNode;
  className?: string;
}

export interface HomeCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
}

export interface LinkItem {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface PostItem {
  title: string;
  date: string;
  slug?: string;
}

export interface TechItem {
  name: string;
}
