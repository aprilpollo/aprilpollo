import type { Metadata } from "next";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { AuroraBackground } from "@/components/ui/aurora-background";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "p.phonsing",
  description: "Personal web blog & profile",
  openGraph: {
    title: "p.phonsing",
    description: "Personal web blog & profile",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/me.jpg`,
        width: 1200,
        height: 630,
        alt: "p.phonsing Profile OG Image",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "p.phonsing",
    description: "Personal web blog & profile",
    images: [`${siteUrl}/me.jpg`],
  }
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <div className="relative lg:h-[40vh] md:h-[30vh] h-[20vh] overflow-hidden flex items-center justify-center border-b">
        <div className="dark:hidden">
          <AuroraBackground />
        </div>
        <div className="z-50 h-[15rem] flex">
          <TextHoverEffect text="APRIL" />
          <TextHoverEffect text="POLLO" />
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
      {children}
    </main>
  );
}
