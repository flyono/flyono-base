import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { BookIcon } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout 
      {...baseOptions()}
      links={[
        {
          icon: <BookIcon />,
          text: 'Blog',
          url: '/blog',
          secondary: false,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
