import BogItems from "@/components/bog-items";
import { blog } from "@/lib/source";
import { Search } from "@/components/search";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default async function page() {
  const posts = blog.getPages();
  const items = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description ?? "",
    slug: post.url,
  }));
  return (
    <>
      <div className="relative lg:h-[40vh] md:h-[30vh] h-[20vh] overflow-hidden flex items-center justify-center border-b">
        <div className="dark:hidden">
          <AuroraBackground />
        </div>
        <div className="z-50 h-[15rem] flex">
          <TextHoverEffect text="BLOG" />
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
      <div id="blog-items" className="px-2 py-10 min-h-[40svh]">
        <div className="flex justify-end max-w-7xl mx-auto">
          <Search />
        </div>
        <BogItems items={items} />
      </div>
    </>
  );
}
