import { InlineTOC } from "fumadocs-ui/components/inline-toc";

interface TocItem {
  depth: number;
  url: string;
  title: React.ReactNode;
}

interface TableOfContentsFloatingProps {
  toc: TocItem[];
}

export function TableOfContentsFloating({ toc }: TableOfContentsFloatingProps) {
  return (
    <aside className="sticky top-4">
      <InlineTOC items={toc} />
    </aside>
  );
}
