import "./global.css";
import clsx from "clsx";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import { Providers } from "@/components/heroui/providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { SearchProvider } from "@/components/searchProvider";
import CustomSearchDialog from "@/components/search";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.titleweb,
    template: `%s | ${siteConfig.titleweb}`,
  },
  description: siteConfig.titlewebdescription,
  icons: {
    icon: "/favicon.ico",
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
    <html lang="th" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <RootProvider>
            <SearchProvider>
              <CustomSearchDialog />
              {children}
            </SearchProvider>
          </RootProvider>
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
