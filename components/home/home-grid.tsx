'use client';

import type { HomeGridProps, HomeCardProps } from './types';

export function HomeGrid({ children, className = '' }: HomeGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export function HomeCard({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
}: HomeCardProps) {
  const colSpanClass = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
  };

  const rowSpanClass = {
    1: 'row-span-1',
    2: 'row-span-2',
  };

  return (
    <div
      className={`
        ${colSpanClass[colSpan]} ${rowSpanClass[rowSpan]}
        bg-white dark:bg-zinc-950
        border border-zinc-200 dark:border-zinc-800
        rounded-lg overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
}
