import { loader } from 'fumadocs-core/source';
import { blog as blogPosts } from '@/.source';


export const blog = loader({
  baseUrl: '/blog',
  source: blogPosts.toFumadocsSource(),
});
