import type { Metadata } from "next";

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
     {children}
    </>
  );
}