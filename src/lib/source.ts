import { blog as blogPosts } from '../../.source';
import { loader } from 'fumadocs-core/source';

export const blog = loader({
  baseUrl: '/blog',
  source: blogPosts.toFumadocsSource(),
});