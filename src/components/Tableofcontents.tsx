"use client";

import { useEffect, useRef, useState } from "react";
import { Layers } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface TocItem {
  depth: number;
  url: string;
  title: React.ReactNode;
}

interface TableOfContentsFloatingProps {
  toc: TocItem[];
}

export function TableOfContentsFloating({ toc }: TableOfContentsFloatingProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const headingOffsets = useRef<number[]>([]);

  useEffect(() => {
    const offsets = toc.map((item) => {
      const id = item.url.replace("#", "");
      const el = document.getElementById(id);
      return el?.offsetTop ?? 0;
    });
    headingOffsets.current = offsets;
  }, [toc]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY; 
      for (let i = toc.length - 1; i >= 0; i--) {
        if (scrollY >= headingOffsets.current[i]) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  return (
    <aside className="sticky top-4">
      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <Layers size={18} />
          <span className="text-sm font-medium">On this page</span>
        </div>
        <div className="relative">
          <div className="flex flex-col gap-1 pl-3">
            {toc.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={clsx(
                  "text-sm px-2 py-1 rounded transition",
                  "hover:bg-accent hover:text-accent-foreground",
                  index === activeIndex
                    ? "lg:bg-primary-50 font-medium lg:border-l-3 lg:border-primary"
                    : "text-muted-foreground",
                )}
                style={{
                  paddingLeft: `${item.depth * 10}px`,
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}