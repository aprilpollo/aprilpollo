"use client";
// import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { Image } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Label } from "@/components/ui/label";
import { Github, ScrollText } from "lucide-react";
import Link from "next/link";

function HomeHeader() {
  return (
    <div className="container mx-auto rounded-md grid grid-cols-1 lg:grid-cols-5 border gap-4 bg-background">
      <div className="col-span-2 flex items-center justify-center">
        <Image src="/truffle.png" alt="truffle" width={350} isBlurred />
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center md:items-start p-4 mb-6">
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
