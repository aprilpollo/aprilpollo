import type { Metadata } from "next";
import { Menu } from "@/components/apps/blog/menu";
import { Sidebar } from "@/components/apps/blog/sidebar";
import { bloglist } from "@/components/data/bloglists";
import { ScrollArea } from "@/components/ui/scroll-area"
// import { ScrollProgress } from "@/components/magicui/scroll-progress";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: `Blog | %s`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="block h-screen">
        <Menu />
        <div className="flex border-t">
          <Sidebar
            bloglists={bloglist}
            className="hidden lg:block sidebar w-md"
          />
          <div className="lg:border-x w-full">
            <ScrollArea className="px-4 py-6 lg:px-8 scroll-content">
            {/* <ScrollProgress className="top-[40px]" /> */}
              {children}
              </ScrollArea>
          </div>
          <nav className="sidebar w-md hidden xl:block"></nav>
        </div>
      </div>
    </>
  );
}
