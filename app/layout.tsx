import { RootProvider } from "fumadocs-ui/provider";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "fumadocs-ui/style.css";
import "../css/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.titleweb,
    template: `${siteConfig.titleweb} | %s`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-background ">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
