import { blogs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { blogsRoute } from './shared';


export const blogsSource = loader({
  baseUrl: blogsRoute,
  source: blogs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});
