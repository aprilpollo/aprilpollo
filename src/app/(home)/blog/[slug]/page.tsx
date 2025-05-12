import defaultMdxComponents from "fumadocs-ui/mdx";
import { createMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { blog } from "@/lib/source";
import { notFound } from "next/navigation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { User } from "@heroui/user";
import { siteConfig } from "@/config/site";
import { TableOfContentsFloating } from "@/components/Tableofcontents";

export default async function page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return (
    <section className="me">
      <div className="relative p-8 md:p-12 flex h-[250px] md:h-[400px] w-full flex-col overflow-hidden rounded-sm border-b">
        <div className="container max-w-7xl max-sm:px-0 md:py-12 z-10">
          <TextAnimate className="uppercase mb-2 max-w-max pb-2 text-4xl font-bold md:text-5xl border-dashed border-b-4 border-fd-muted-foreground">
            {page.data.title}
          </TextAnimate>
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
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div id="written-by">
            <User
              avatarProps={{
                src: siteConfig.profile.avatar,
                size: "md",
                isBordered: true,
              }}
              name="Written by"
              description={siteConfig.profile.name}
            />
          </div>
          <TableOfContentsFloating toc={page.data.toc}/>
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
