"use client";

import { siteConfig as config } from "@/config/site";
import { Avatar } from "@heroui/avatar";
import { Link } from "@heroui/link";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <FadeIn>
      <footer
        id="footer"
        className="container max-w-7xl h-40 flex justify-between items-center flex-wrap"
      >
        <div className="flex items-center gap-2 ">
          <Avatar size="sm" src="/APRILPOLLO.png" />
          <span className="text-xs"> © {new Date().getFullYear()} </span>
          <span className="text-xs">{config.titleweb}</span>
          <Link href="/" className="text-xs">Blog</Link>
          <Link href="/profile" className="text-xs">Profile</Link>
        </div>
        <div className="flex items-center gap-2">
            <Link href={config.links.facebook} isExternal className="text-xs">
              Facebook
            </Link>
            <Link href={config.links.instagram} isExternal className="text-xs">
              Instagram
            </Link>
            <Link href={config.links.linkedin} isExternal className="text-xs">
              Linkedin
            </Link>
            <Link href={config.links.twitter} isExternal className="text-xs">
              Twitter
            </Link>
          </div>
      </footer>
    </FadeIn>
  );
}
