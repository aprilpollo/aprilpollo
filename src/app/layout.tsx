import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Meteors } from "@/components/magicui/meteors";

// import { MeteorDemo } from '@/components/bg-meteors';
// import { fontSans } from "@/config/fonts";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.titleweb,
    template: `${siteConfig.titleweb} | %s`,
  },
};


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col">
        <RootProvider>
          <Meteors number={30} />
          <div className="z-10 rootbody">{children}</div>
        </RootProvider>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
