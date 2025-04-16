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
import { ScrollText, Github } from "lucide-react";
import { User } from "@heroui/react";
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
    <section id="profile">
     <div className="px-[1px]">
     <BgInteractiveGridPattern />
     </div>
      {/* <Image src="bg/13.png"/> */}
      <header className="h-14 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-between rounded-b-md sm:px-32 px-10">
        <User
          avatarProps={{
            src: "/truffle.png",
            size: "lg",
            isBordered: true,
            color: "secondary",
            className: "top-[-8px] z-[99]",
          }}
          description={siteConfig.nickname}
          name={siteConfig.name}
        />
        {blog}
      </header>
      <main className="py-5 flex flex-col gap-5">
        <div className="flex gap-5">
          {contect}
          <HeaderSection />
        </div>
        <AboutSection />
        <FeaturesListSection />
        <CtaSection />
        <Footer />
      </main>
    </section>
  );
}

const blog = (
  <div className="hidden sm:flex gap-2">
    <Link href="/blog">
      <Button variant="outline" className="cursor-pointer" size="sm">
        <ScrollText />
        Blog
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
