"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="footer">
      <Separator />
      <div className="flex justify-between pt-5 pb-12">
        <div className="flex gap-2">
          <span className="text-default-600 text-xs">© 2025</span>
          <p className="text-xs uppercase">APL-PS</p>
        </div>
        <div className="flex gap-2">
          {/* <ModeToggle /> */}
          <Link
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.facebook}
          >
            <Facebook className="size-5"/>
          </Link>
          <Link
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.instagram}
          >
            <Instagram className="size-5"/>
          </Link>
          <Link
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.linkedin}
          >
            <Linkedin className="size-5"/>
          </Link>
          <Link
            className="text-default-600 cursor-pointer"
            href={siteConfig.links.twitter}
          >
            <Twitter className="size-5"/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

  