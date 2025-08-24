import type { Metadata } from "next";
const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    template: "%s | blog",
    default: "blog",
  },
  description: "Explore articles, tutorials, and insights on blog.",
  openGraph: {
    title: "blog | april pollo",
    description: "Explore articles, tutorials, and insights on blog.",
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo.svg`,
        width: 1200,
        height: 630,
        alt: " Blog OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ",
    description: "Explore articles, tutorials, and insights on blog.",
    images: [`${siteUrl}/logo.svg`],
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id="blog-layout">
      {children}
    </main>
  );
}
