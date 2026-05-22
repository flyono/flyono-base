'use client';

import { GitFork, Globe, Mail } from 'lucide-react';
import type { LinkItem } from './types';

const links: LinkItem[] = [
  { icon: GitFork, href: 'https://github.com', label: 'GitHub' },
  { icon: Globe, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hi@example.com', label: 'Email' },
];

export function LinksCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
        Links
      </p>
      <div className="flex gap-2">
        {links.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded text-zinc-600 dark:text-zinc-400 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors"
            aria-label={label}
          >
            <Icon className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    </div>
  );
}
