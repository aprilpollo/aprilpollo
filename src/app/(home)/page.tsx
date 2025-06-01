import { blog } from "@/lib/source";
import { MagicCard } from "@/components/magicui/magic-card";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Particles } from "@/components/bg-particles";
import Interactivekitten from "@/components/animation/Interactivekitten";

import Link from "next/link";

export default function BlogPage() {
  const posts = blog.getPages();
  return (
    <section className="me">
      <div className="relative p-8 md:p-12 flex h-[250px] md:h-[400px] w-full flex-col overflow-hidden rounded-sm border-b">
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          refresh
        />
        <Interactivekitten />
        <div className="container max-w-7xl max-sm:px-0 md:py-12">
          <AuroraText
            speed={1}
            //colors={["#5EA2EF", "#0072F5", "#F54C7A"]}
            className="z-10 uppercase mb-2 pb-2 text-4xl font-bold md:text-5xl border-b-4 "
          >
            Blog
          </AuroraText>
          <p className="z-10 text-sm md:text-base text-fd-accent-foreground">
            © aprilpollo {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <main className="container max-w-7xl">
        <article
          id="blog-all"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 gap-4 "
        >
          {posts.map((post, index) => (
            <BlurFade key={post.url} delay={index * 0.2}>
              <Link href={post.url}>
                <MagicCard
                  gradientColor="#00b7fa"
                  gradientFrom="#01cfea"
                  gradientTo="#5EA2EF"
                  gradientOpacity={0.1}
                  className="p-4 h-28 rounded-sm"
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
    </section>
  );
}
