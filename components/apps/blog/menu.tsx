import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import Link from "next/link";
export function Menu() {
  return (
    <header className="flex items-center justify-between border-b border-none px-2">
      <Link href="/">
        <div className="flex items-center gap-2.5 ">
          <div className="relative size-10">
            <img
              src="/truffle.svg"
              alt="truffle"
              className=" w-full h-full object-cover"
            />
          </div>
          <h2 className="uppercase font-bold bungee-shade text-xl">{siteConfig.titleweb}</h2>
        </div>
      </Link>
      <div className="flex">
        <ModeToggle variant="ghost" />
        <Link href="/blog"></Link>
        <Link href={`${siteConfig.links.github}/aprilpollo`}>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Github />
          </Button>
        </Link>
      </div>
    </header>
  );
}
