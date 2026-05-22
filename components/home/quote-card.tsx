'use client';

export function QuoteCard() {
  return (
    <div className="flex flex-col justify-center h-full p-6">
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Programs must be written for people to read, and only incidentally for machines to execute.
      </p>
      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-3 font-mono">
        — Harold Abelson
      </p>
    </div>
  );
}
