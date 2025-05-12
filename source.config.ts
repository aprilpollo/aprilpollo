import {
  defineDocs,
  defineConfig
} from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";

export const docs = defineDocs({
  dir: 'content/docs',
});
export const blog = defineDocs({
  dir: "content/blog"
});
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall],
  },
});