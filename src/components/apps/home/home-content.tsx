"use client";
import { Tabs, Tab } from "@heroui/react";
import AboutSection from "./about-section";
import FeaturesListSection from "./features-list-section";
import { History, CircleFadingArrowUp, Signature } from "lucide-react";
import CtaSection from "./cta-section";

function HomeContent() {
  return (
    <div className="mx-auto container relative bg-background">
      <Tabs aria-label="Options" variant="underlined" size="sm" radius="sm">
        <Tab
          key="story"
          title={
            <div className="flex items-center gap-1">
              <History className="size-4" />
              My Story
            </div>
          }
        >
          <div className="min-h-96">
            <AboutSection />
          </div>
        </Tab>
        <Tab
          key="skills"
          title={
            <div className="flex items-center gap-1">
              <CircleFadingArrowUp className="size-4" />
              Skills
            </div>
          }
        >
          {" "}
          <div className="min-h-96">
            <FeaturesListSection />
          </div>
        </Tab>
        <Tab
          key="contact"
          title={
            <div className="flex items-center gap-1">
              <Signature className="size-4" />
              Contact us
            </div>
          }
        >
          <div className="min-h-96">
            <CtaSection />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default HomeContent;
