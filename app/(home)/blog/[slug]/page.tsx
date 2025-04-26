import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { notFound } from "next/navigation";
import { Meteors } from "@/components/magicui/meteors";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

export default async function page(props: {
  params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  return (
    <>
      <div className="relative p-8 md:p-12 flex h-[250px] md:h-[400px] w-full flex-col overflow-hidden rounded-sm border-b">
        <Meteors number={30} />
        <div className="container max-sm:px-0 md:py-12 z-10">
          <TextAnimate
            // animation="blurInUp"
            // by="character"
            // duration={1}
            className="uppercase mb-2 max-w-max pb-2 text-4xl font-bold md:text-5xl border-dashed border-b-4 border-fd-muted-foreground"
          >
            {page.data.title}
          </TextAnimate>
          <TextAnimate
            animation="scaleUp"
            by="text"
            delay={0.5}
            className="text-sm md:text-base text-fd-accent-foreground"
          >
            {page.data.description ??
              "Don’t give up on your dreams. Keep sleeping."}
          </TextAnimate>
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
          {/* <div className="flex flex-col gap-2">
            <h2 className="text-fd-muted-foreground">Table of Contents</h2>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-2"
              //defaultValue="3"
            >
              <AccordionItem
                value="1"
                //key={item.id}
                className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
              >
                <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0">
                  Contents
                </AccordionTrigger>
                {page.data.toc.map((item: any) => (
                  <AccordionContent
                    key={item.url}
                    className="text-muted-foreground pb-2"
                  >
                    <a href={item.url} className="hover:underline block">
                      {item.title?.props?.children}
                    </a>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          </div> */}
        </div>
      </article>
      <div className="container px-4 py-8">
        <Footer />
      </div>
    </>
  );
}
