import { blog } from "@/lib/source";
import Link from "next/link";
import { Metadata } from "next";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";

export const metadata: Metadata = {
  title: "blog"
};


export default function BlogPage() {
  const posts = blog.getPages();
  return (
    <>
      <div className="relative p-8 md:p-12 flex h-[250px] md:h-[400px] w-full flex-col overflow-hidden rounded-sm border-b">
        <div className="container max-sm:px-0 md:py-12">
          <AuroraText
            speed={1}
            colors={["#000046", "#1CB5E0"]}
            className="z-10 uppercase mb-2 max-w-max pb-2 text-4xl font-bold md:text-5xl border-dashed border-b-4 border-fd-muted-foreground"
          >
            Aprilpollo Blog
          </AuroraText>
          <p className="z-10 text-sm md:text-base text-fd-accent-foreground">
            Don’t give up on your dreams. Keep sleeping.
          </p>
        </div>
      </div>

      <main className="container">
        <article
          id="blog-all"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 gap-4 "
        >
          {posts.map((post, index) => (
            <BlurFade key={post.url} delay={index * 0.2}>
              <Link href={post.url}>
                <MagicCard
                  gradientColor="#020024"
                  gradientFrom="#090979"
                  gradientTo="#00D4FF"
                  gradientOpacity={0.1}
                  className="p-4 min-h-28 rounded-sm"
                >
                  <p className="text-xl">{post.data.title}</p>
                  <span className="text-sm text-fd-muted-foreground">
                    {post.data.description}
                  </span>
                </MagicCard>
              </Link>
            </BlurFade>
          ))}
        </article>
      </main>
    </>
  );
}
