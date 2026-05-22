'use client';

import { Sun } from 'lucide-react';

export function WeatherCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <Sun className="w-8 h-8 text-zinc-900 dark:text-white mb-2" />
      <p className="text-2xl font-mono font-bold text-zinc-900 dark:text-white">
        28°
      </p>
      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-1">
        Sunny
      </p>
    </div>
  );
}
