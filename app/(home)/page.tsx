import { GitFork, Globe, Mail } from 'lucide-react';

const recentPosts = [
  { title: '使用 Next.js 构建现代博客', date: '05-20', href: '/blogs' },
  { title: 'Fumadocs 入门指南', date: '05-18', href: '/blogs' },
  { title: 'Tailwind CSS 最佳实践', date: '05-15', href: '/blogs' },
];

const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Godot'];

const links = [
  { icon: GitFork, href: 'https://github.com/flyono', label: 'GitHub' },
  { icon: Globe, href: 'https://flyono.dev', label: 'Website' },
  { icon: Mail, href: 'mailto:hi@flyono.dev', label: 'Email' },
];

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-xl space-y-20">

        {/* Hero */}
        <section className="flex flex-col items-center text-center animate-scale-in">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-2xl scale-150" />
            <img
              src="/Black cat.png"
              alt="Flyone"
              width={96}
              height={96}
              className="relative w-24 h-24 rounded-full ring-2 ring-stone-200/60 dark:ring-stone-800/60 ring-offset-4 ring-offset-stone-50 dark:ring-offset-stone-950"
            />
          </div>
          <div className="space-y-3">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Hey, 欢迎来到 Flyono 的个人基地！
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed max-w-xs mx-auto">
              Developer &amp; open source enthusiast. Building tools for the web, writing about what I learn.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr
          className="w-12 mx-auto border-stone-200 dark:border-stone-800 animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        />

        {/* Recent Posts */}
        <section
          className="space-y-4 animate-fade-in-up"
          style={{ animationDelay: '250ms' }}
        >
          <h2 className="font-serif text-lg text-stone-800 dark:text-stone-200 text-center">
            Recent Writing
          </h2>
          <ul className="space-y-0.5">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <a
                  href={post.href}
                  className="group flex items-baseline justify-between gap-4 py-2.5 px-3 -mx-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-900/50 transition-colors duration-200"
                >
                  <span className="text-sm text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-200 transition-colors">
                    {post.title}
                  </span>
                  <span className="text-xs text-stone-400 dark:text-stone-500 font-mono shrink-0">
                    {post.date}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section
          className="space-y-4 animate-fade-in-up"
          style={{ animationDelay: '350ms' }}
        >
          <h2 className="font-serif text-lg text-stone-800 dark:text-stone-200 text-center">
            Toolbox
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-900/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr
          className="w-12 mx-auto border-stone-200 dark:border-stone-800 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        />

        {/* Links */}
        <section
          className="flex justify-center gap-3 animate-fade-in-up"
          style={{ animationDelay: '550ms' }}
        >
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 dark:border-stone-800 text-stone-400 dark:text-stone-500 hover:text-stone-900 hover:border-stone-400 dark:hover:text-stone-100 dark:hover:border-stone-600 transition-all duration-200"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </section>

      </div>
    </div>
  );
}
