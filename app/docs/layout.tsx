import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import { Component, FileText, Ghost } from 'lucide-react';

const docsTabs: LayoutTab[] = [
  {
    title: 'Blog',
    description: 'Flyono\'s Blog',
    url: '/docs',
    icon: <Ghost />,
  },
  {
    title: '组件示例',
    description: 'Fumadocs 组件演示',
    url: '/docs/test',
    icon: <Component />,
  },
  {
    title: '测试页面',
    description: '额外文档页面',
    url: '/docs/test1',
    icon: <FileText />,
  },
];

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} tabs={docsTabs} tabMode="auto" {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
