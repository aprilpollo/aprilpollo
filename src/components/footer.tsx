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
        <div className="flex items-center gap-2">
          <Avatar size="sm" src="/APRILPOLLO.png" />
          <span> © {new Date().getFullYear()} </span>
          <span>{config.titleweb}</span>
          <Link href="/">Blog</Link>
          <Link href="/profile">Profile</Link>
        </div>
        <div className="flex items-center gap-2">
            <Link href={config.links.facebook} isExternal>
              Facebook
            </Link>
            <Link href={config.links.instagram} isExternal>
              Instagram
            </Link>
            <Link href={config.links.linkedin} isExternal>
              Linkedin
            </Link>
            <Link href={config.links.twitter} isExternal>
              Twitter
            </Link>
          </div>
      </footer>
    </FadeIn>
  );
}
