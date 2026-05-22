'use client';

export function ProfileCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="w-20 h-20 rounded-full bg-zinc-900 dark:bg-white mb-4 flex items-center justify-center text-white dark:text-zinc-900 text-2xl font-mono font-bold">
        F
      </div>
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
        Flyone
      </h2>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Developer
      </p>
    </div>
  );
}
