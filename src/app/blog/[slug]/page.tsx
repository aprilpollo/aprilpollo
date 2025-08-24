import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { blog } from "@/lib/source";
import { BogItemRow, BogItemCal } from "@/components/bog-items";
import { Search } from "@/components/search";
import { notFound } from "next/navigation";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import defaultMdxComponents from "fumadocs-ui/mdx";
import Link from "next/link";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  const image = `${siteUrl}/og/${params.slug}/${params.slug}.png`;
  return {
    title: page.data.title.toLocaleLowerCase(),
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: `${siteUrl}/blog/${params.slug}`,
      type: "article",
      images: image,
    },
    twitter: {
      title: page.data.title,
      description: page.data.description,
      card: "summary_large_image",
      images: image,
    },
  };
}

export default async function page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  const moreRecord = blog.getPages();
  const items = moreRecord.map((post) => ({
    title: post.data.title,
    description: post.data.description || "",
    url: post.url,
  }));

  return (
    <>
      <div className="relative lg:h-[40vh] md:h-[30vh] h-[20vh] overflow-hidden flex items-center justify-center border-b">
        <div className="dark:hidden">
          <AuroraBackground />
        </div>
        <div className="z-50 h-[15rem] w-full">
          <TextHoverEffect text={page.data.title.toLocaleUpperCase()} />
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
      <main
        id="blog-content"
        className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 pt-10"
      >
        <section className="lg:col-span-2">
          <div className="flex justify-end lg:hidden sticky top-10 z-50">
            <Search className="mb-8" />
          </div>
          <article className="prose prose-slate dark:prose-invert lg:mb-10">
            <page.data.body components={defaultMdxComponents} />
          </article>
          <div className="my-10 lg:hidden">
            <Link href="/" className="flex gap-2 items-center">
              <Avatar className="size-10">
                <AvatarImage src="/me.jpg" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold dark:text-white">
                  Phonsing Taleman
                </span>
                <span className="text-xs text-muted-foreground">
                  Software Engineer
                </span>
              </div>
            </Link>
          </div>
          <ScrollArea className="lg:hidden">
            <BogItemCal items={items} />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>
        <section className=" hidden lg:block col-span-1">
          <div className="sticky top-10 px-10">
            <Link href="/" className="flex gap-2 items-center">
              <Avatar className=" size-10">
                <AvatarImage src="/me.jpg" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold dark:text-white">
                  Phonsing Taleman
                </span>
                <span className="text-xs text-muted-foreground">
                  Software Engineer
                </span>
              </div>
            </Link>
            <div className="border-b my-5 mb-8" />
            <Search className="mb-8 w-full" />
            <ScrollArea className="h-[65svh]">
              <BogItemRow items={items} />
            </ScrollArea>
          </div>
        </section>
      </main>
    </>
  );
}
