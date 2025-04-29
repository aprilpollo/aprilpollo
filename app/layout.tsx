import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";

// import { Meteors } from "@/components/magicui/meteors";

import "fumadocs-ui/style.css";
import "../css/globals.css";

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
    <html lang="th" suppressHydrationWarning className={fontSans.variable}>
      <body>
        {/* <Meteors number={30} /> */}
        <RootProvider>{children}</RootProvider>
        <div className="container  mx-auto">
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
