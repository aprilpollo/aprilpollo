"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bloglist } from "@/components/data/bloglists";
import { Cat, CornerDownRight } from "lucide-react";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  bloglists: Bloglist[];
}

export function Sidebar({ className, bloglists }: SidebarProps) {
  const pathname = usePathname();
  const isAcctive = "bg-zinc-100 dark:bg-zinc-800 border-blue-500 border-l-4";
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Getting Started
          </h2>
          <div className="space-y-1">
            <Link href="/blog">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start cursor-pointer",
                  pathname == "/blog" ? isAcctive : ""
                )}
              >
                <Cat />
                Introduction
              </Button>
            </Link>
          </div>
        </div>

        <div className="py-2">
          <h2 className="relative px-5 text-lg font-semibold tracking-tight">
            Blog
          </h2>
          <ScrollArea className="sidebar-blog px-1">
            <div className="p-2 flex flex-col gap-1">
              {bloglists?.map((item, i) => (
                <Link key={`${item.name}-${i}`} href={item.link}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal cursor-pointer ",
                      pathname == item.link ? isAcctive : ""
                    )}>
                    {pathname == item.link && <CornerDownRight />}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
