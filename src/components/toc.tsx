"use client";

import { ReactNode } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

interface TocProps {
  depth: number;
  url?: string;
  title?: ReactNode;
}

interface TocItem {
  toc: TocProps[];
}

function Toc({ toc }: TocItem) {
  return (
    <Accordion variant="light" isCompact className="border rounded-md">
      <AccordionItem aria-label="toc" title="Table of Contents">
        <div className="flex flex-col gap-2">
          {toc.map((item, index) => (
            <a
              key={index}
              href={item.url}
              style={{ paddingLeft: `${item.depth}rem` }}
              className="text-sm text-fd-accent-foreground hover:text-primary"
            >
              {item.title}
            </a>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default Toc;
