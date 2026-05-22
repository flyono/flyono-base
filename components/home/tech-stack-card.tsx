'use client';

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind'];

export function TechStackCard() {
  return (
    <div className="flex flex-col justify-center h-full p-6">
      <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3">
        Stack
      </p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2 py-1 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
