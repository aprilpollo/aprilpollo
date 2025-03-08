"use client";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { siteConfig } from "@/config/site";
import { ScrollText, Github, ChevronDown } from "lucide-react";

export default function DropdownBlog() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="sm:hidden flex text-xs font-bold text-default-500 items-center cursor-pointer">
        {siteConfig.nickname}<ChevronDown/>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <ScrollText />
          Blog
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Github />
          Github
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
