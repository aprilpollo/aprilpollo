import { Divider } from "@heroui/divider";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { blog } from "@/lib/source";
import { notFound } from "next/navigation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { User } from "@heroui/user";
import { siteConfig } from "@/config/site";
import { Particles } from "@/components/bg-particles";
import Toc from "@/components/toc";
import Interactivekitten from "@/components/animation/Interactivekitten";
import defaultMdxComponents from "fumadocs-ui/mdx";

export default async function page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

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
        <div className="container max-w-7xl max-sm:px-0 md:py-12 z-10">
          <AuroraText
            speed={1}
            //colors={["#5EA2EF", "#0072F5", "#F54C7A"]}
            className="z-10 uppercase mb-2 pb-2 text-4xl font-bold md:text-5xl border-b-4 "
          >
            {page.data.title}
          </AuroraText>
          <TextAnimate
            animation="scaleUp"
            by="text"
            delay={0.5}
            className="text-sm mb-2 md:text-base text-fd-accent-foreground"
          >
            {page.data.description ??
              "Don’t give up on your dreams. Keep sleeping."}
          </TextAnimate>
        </div>
      </div>
      <article className="container max-w-7xl flex flex-col py-8 lg:flex-row ">
        <BlurFade delay={0.5} className="prose min-w-0 flex-1 lg:pr-4">
          <page.data.body components={defaultMdxComponents} />
        </BlurFade>
        <div className="flex flex-col gap-4 text-sm ">
          <div id="written-by" className="sticky top-10 z-10 lg:w-[250px] mt-16 lg:mt-0">
            <User
              avatarProps={{
                src: siteConfig.profile.avatar,
                size: "md",
                isBordered: true,
              }}
              name="Written by"
              description={siteConfig.profile.name}
            />
            <Divider className="mt-4 mb-5" />
            <Toc toc={page.data.toc} />
          </div>
        </div>
      </article>
    </section>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description:
      page.data.description ?? "The library for building documentation sites",
  });
}
