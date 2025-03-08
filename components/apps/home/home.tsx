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
import Link from "next/link";
import HeaderSection from "./header-section";
import AboutSection from "./about-section";
import FeaturesListSection from "./features-list-section";
import CtaSection from "./cta-section";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section id="content-section" className="flex gap-4 ">
      <div className="w-80 hidden md:flex flex-col my-10  pr-4 ">
        <div className="max-w-md">
          <div className="space-y-1 flex flex-col">
            <h4 className="text-medium font-bold">comEng 👍🏻•_•👍🏻</h4>
            <br />
            <Label>
              <School className="size-4" />
              {siteConfig.title.university}
            </Label>
            <Label>
              <MapPin className="size-4" />
              {siteConfig.title.location}
            </Label>
            <Label>
              <Mail className="size-4" />
              {siteConfig.title.mail}
            </Label>
            <Label>
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
      </div>
      <div className="w-full my-10 ">
        <HeaderSection />
        <AboutSection />
        <FeaturesListSection />
        <CtaSection />
      </div>
    </section>
  );
}
