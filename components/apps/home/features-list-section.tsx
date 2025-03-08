import { Network, BicepsFlexed, GalleryVerticalEnd } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { title, subtitle } from "@/config/primitives";

// import { DotPattern } from "../ui/dot-pattern";

export default function FeaturesListSection() {
  const data = [
    {
      icon: <Network />,
      title: "Implemented a robust API",
      description:
        "Developed a high-performance and secure API for social media platforms and enterprises using Go Fiber, Fast API, andPostgreSQL.",
    },
    {
      icon: <BicepsFlexed />,
      title: "Skill Sets",
      description:
        "Designing and developing cutting-edge web applications tailored to meet your business needs with modern frameworks and technologies.",
    },
    {
      icon: <GalleryVerticalEnd />,
      title: "Professional Background",
      description:
        "3+ years of experience in full-stack development, focusing on delivering practical and scalable solutions.",
    },
  ];

  return (
    <section id="features-list-section" className="relative my-10" >
      {/* <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      /> */}
      <div className="flex flex-col md:w-2/3 w-full ">
        <h2 className={title()}>My</h2>
        <h2 className={title({ color: "cyan" })}>Expertise & Achievements</h2>
        <p className={subtitle()}>
          Discover my portfolio highlights, professional background, and key
          skill sets that showcase my capabilities and expertise.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((item, index) => (
          <Card key={index} className=" rounded-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {item.title}
                {item.icon}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
