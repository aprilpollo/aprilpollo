"use client";
// import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
// import { Image } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Label } from "@/components/ui/label";
import { Github, ScrollText } from "lucide-react";
import Link from "next/link";

function HomeHeader() {
  return (
    <div id="homeheader" 
    className="relative p-8 md:p-12 flex min-h-[250px] md:h-[400px] w-full flex-col bg-[url('/bg/11.png')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black/5">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent z-0" />
      <div className="container flex flex-col max-sm:px-0 md:py-12 z-10">
        <TextAnimate className="uppercase mb-2 max-w-max pb-2 text-4xl font-bold md:text-5xl border-dashed border-b-4 border-fd-muted-foreground">
          Polsing Taleman
        </TextAnimate>
        <TextAnimate
          animation="scaleUp"
          by="text"
          delay={0.5}
          className="text-sm mb-2 md:text-base"
        >
          Computer Engineering & Software Developer
        </TextAnimate>

        <div className="flex flex-col gap-2 my-6">
          <Label className="text-sm font-medium">About Me</Label>
          <p className="text-sm max-w-lg">
            ดีจ้า ชื่อโนอาร์ เรียกอาร์ก็ได้ เป็นทาสแมวเต็มตัว
            เวลาว่างก็จะหายไปกับหนัง ซีรีส์
            แล้วก็เกมเนื้อเรื่องที่เล่นทีลืมเวลาเลย ใครมีเกม หรือซีรีส์มันส์ ๆ
            มาแชร์กันได้เลย
          </p>
        </div>
        {Blog}
      </div>
    </div>
  );
}

const Blog = (
  <div className="flex gap-2 mb-2">
    <Link href="/blog">
      <Button variant="outline" className="cursor-pointer" size="sm">
        <ScrollText />
        Blog
      </Button>
    </Link>
    <Link href={siteConfig.links.github}>
      <Button variant="outline" className="cursor-pointer" size="sm">
        <Github />
        Github
      </Button>
    </Link>
  </div>
);

export default HomeHeader;
