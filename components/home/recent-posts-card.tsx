'use client';

const recentPosts = [
  { title: '使用 Next.js 构建现代博客', date: '05-20' },
  { title: 'Fumadocs 入门指南', date: '05-18' },
  { title: 'Tailwind CSS 最佳实践', date: '05-15' },
];

export function RecentPostsCard() {
  return (
    <div className="flex flex-col justify-center h-full p-6">
      <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
        Recent
      </p>
      <ul className="space-y-2">
        {recentPosts.map((post) => (
          <li key={post.title} className="flex justify-between items-baseline gap-2">
            <span className="text-xs text-zinc-700 dark:text-zinc-300 truncate">
              {post.title}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono shrink-0">
              {post.date}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
