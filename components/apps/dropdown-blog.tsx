"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { siteConfig } from "@/config/site";
import { ScrollText, Github, ChevronDown } from "lucide-react";

export default function DropdownBlog() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="sm:hidden flex text-xs font-bold text-default-500 items-center cursor-pointer">
        {siteConfig.nickname}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/blog" className="w-full flex items-center gap-2.5">
            <ScrollText />
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href={siteConfig.links.github}
            className="w-full flex items-center gap-2.5"
          >
            <Github />
            Github
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
