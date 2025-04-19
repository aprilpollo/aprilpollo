import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Clock4,
  School,
} from "lucide-react";
import { Github, ScrollText } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import { BgInteractiveGridPattern } from "@/components/bg-grid-pattern";
import Link from "next/link";

import HeaderSection from "./header-section";
import AboutSection from "./about-section";
import FeaturesListSection from "./features-list-section";
import CtaSection from "./cta-section";

export default function Profile() {
  return (
    <main id="profile">
      <div className="px-[1px]">
        <BgInteractiveGridPattern />
      </div>
      <header className="h-14 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between rounded-b-md sm:px-32 px-10">
        <div className="flex gap-2">
          <Avatar className="size-16 top-[-10px] border-2 p-0.5">
            <AvatarImage src="/truffle.png" className="rounded-full" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h1 className="text-sm font-medium">{siteConfig.name}</h1>
            <h2 className="text-xs font-medium text-muted-foreground">{siteConfig.nickname}</h2>
          </div>
        </div>
        {NavGithub}
      </header>
      <section className="py-5 flex flex-col gap-5">
        <div className="flex gap-5">
          {contect}
          <HeaderSection />
        </div>
        <AboutSection />
        <FeaturesListSection />
        <CtaSection />
        <Footer />
      </section>
    </main>
  );
}

const NavGithub = (
  <div className="hidden sm:flex gap-2">
    <Link href="/docs">
      <Button variant="outline" className="cursor-pointer" size="sm">
        <ScrollText />
        Docs
      </Button>
    </Link>
    <Link href={siteConfig.links.github}>
      <Button variant="outline" className="cursor-pointer" size="sm">
        <Github />
        Github
      </Button>
    </Link>
  </div>
);

const contect = (
  <div className="hidden sm:block w-xs bg-zinc-50 dark:bg-zinc-900 p-4 rounded-md">
    <div className="space-y-1 flex flex-col">
      <h4 className="text-medium font-bold">comEng 👍🏻•_•👍🏻</h4>
      <br />
      <Label className="flex items-center gap-1">
        <School className="size-4" />
        {siteConfig.title.university}
      </Label>
      <Label className="flex items-center gap-1">
        <MapPin className="size-4" />
        {siteConfig.title.location}
      </Label>
      <Label className="flex items-center gap-1">
        <Mail className="size-4" />
        {siteConfig.title.mail}
      </Label>
      <Label className="flex items-center gap-1">
        <Clock4 className="size-4" />
        {siteConfig.title.time}
      </Label>
    </div>
    <Separator className="my-4" />

    <div className="flex h-5 items-center space-x-2 text-small">
      <Link href={siteConfig.links.facebook}>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Facebook />
        </Button>
      </Link>
      <Link href={siteConfig.links.instagram}>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Instagram />
        </Button>
      </Link>
      <Link href={siteConfig.links.linkedin}>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Linkedin />
        </Button>
      </Link>
      <Link href={siteConfig.links.twitter}>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Twitter />
        </Button>
      </Link>
    </div>
  </div>
);
