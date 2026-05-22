import { baseOptions } from '@/lib/layout.shared';
import { blogsSource } from '@/lib/blogs-source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';

export default function Layout({ children }: LayoutProps<'/blogs'>) {
  return (
    <DocsLayout tree={blogsSource.getPageTree()} {...baseOptions()} tabMode="navbar">
      {children}
    </DocsLayout>
  );
}
