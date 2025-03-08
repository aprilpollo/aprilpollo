import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollText, Github } from "lucide-react";
import { siteConfig } from "@/config/site";

import DropdownBlog from "@/components/apps/dropdown-blog";
import { ModeToggle } from "@/components/mode-toggle";
const blog = (
  <div className="hidden sm:flex gap-2 absolute right-0">
    <ModeToggle/>
    <Button variant="outline" className="cursor-pointer">
      <ScrollText />
      Blog
    </Button>
    <Button variant="outline" className="cursor-pointer">
      <Github />
      Github
    </Button>
  </div>
);

export default function Page() {
  return (
    <div className="container max-w-full mx-auto">
      <section className="h-96 relative overflow-hidden" id="header-img">
        <img
          alt="11.png"
          className="w-full h-full object-cover"
          src="bg/11.png"
        />
      </section>
      <header id="header-section" className="bg-zinc-50 dark:bg-zinc-900">
        <section className="max-w-6xl mx-auto px-4">
          <div className="h-20 flex items-center gap-8 relative">
            <div className=" relative top-[-30px]">
              <Avatar className="w-28 h-28 text-large">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
            </div>
            <div id="name">
              <h1 className="font-bold">{siteConfig.name}</h1>
              <h2 className="hidden sm:flex text-xs font-bold text-default-500">
                {siteConfig.nickname}
              </h2>
              <DropdownBlog/>
            </div>
            {blog}
          </div>
        </section>
      </header>
      <main id="content" className="max-w-7xl mx-auto px-6"></main>
    </div>
  );
}
