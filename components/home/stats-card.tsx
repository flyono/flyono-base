'use client';

const stats = [
  { label: 'Published', value: '12' },
  { label: 'Drafts', value: '3' },
];

export function StatsCard() {
  return (
    <div className="flex flex-col justify-center h-full p-6">
      <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
        Posts
      </p>
      <div className="space-y-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex justify-between items-baseline">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </span>
            <span className="text-2xl font-mono font-bold text-zinc-900 dark:text-white">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
