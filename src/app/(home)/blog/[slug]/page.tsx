import defaultMdxComponents from "fumadocs-ui/mdx";
import { createMetadata } from '@/lib/metadata';
import { Metadata } from "next";
import { blog } from "@/lib/source";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { notFound } from "next/navigation";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return (
    <>
      <div className="relative p-8 md:p-12 flex h-[250px] md:h-[400px] w-full flex-col overflow-hidden rounded-sm border-b">
        <div className="container max-sm:px-0 md:py-12 z-10">
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
          <BlurFade delay={0.5}>
            <Link href="/blog" >
            <Button size="sm" variant="secondary" className="cursor-pointer">
              Back
            </Button>
            </Link>
          </BlurFade>
        </div>
      </div>
      <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
        <BlurFade delay={0.5} className="prose min-w-0 flex-1 p-4">
          {/* <InlineTOC items={page.data.toc} /> */}
          <page.data.body components={defaultMdxComponents} />
        </BlurFade>
        <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
          <div className="flex gap-2">
            <Avatar className="size-14 ">
              <AvatarImage src="/truffle.png" className="rounded-full" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <h2 className="text-fd-muted-foreground">Written by</h2>
              <h1 className="text-sm font-medium">{siteConfig.name}</h1>
            </div>
          </div>

          <InlineTOC items={page.data.toc} />
        </div>
      </article>
    </>
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
      page.data.description ?? 'The library for building documentation sites',
  });
}
