import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import AboutSection from "@/components/about-section";
import GitHubProfile from "@/components/github";

export default function page() {
  const achievements = [
    "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png",
  ];

  return (
    <section className="relative container mx-auto max-w-7xl px-4 pb-10">
      <div
        className="size-24 lg:size-32 p-[3px] rounded-full 
                  bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 relative -top-10 lg:-top-16"
      >
        <Avatar className="size-full rounded-full bg-background p-1">
          <AvatarImage src="/me.jpg" alt="@phonsing" className="rounded-full" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 w-full relative lg:-top-10 -top-8">
          <div id="profile-info">
            <h1 className="text-2xl font-bold">Phonsing Taleman</h1>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="size-4" />
              nonthaburi, thailand
            </span>
            <p className="text-sm text-muted-foreground">
              Computer Engineering | Software Development
            </p>
            <div className="flex gap-2 mt-4">
              <Link href="/blog">
                <Button size="sm" className="rounded-md cursor-pointer">
                  Invite to my blog
                </Button>
              </Link>
              <Link
                href="https://github.com/aprilpollo"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8 rounded-md cursor-pointer"
                >
                  <Github />
                </Button>
              </Link>
              <Link
                href="https://www.instagram.com/p.phonsing_"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="size-8 rounded-md cursor-pointer"
                >
                  <Instagram />
                </Button>
              </Link>
            </div>
          </div>
          <div className="my-8 lg:pr-10">
            <div className="border-b" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-2xl font-bold">Achievements</span>
            <div className="flex gap-1">
              {achievements.map((item, i) => (
                <Avatar className="size-16" key={i}>
                  <AvatarImage src={item} alt="@achievements" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-10 relative lg:-top-20">
          <div id="about-title">
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className="mt-2 text-muted-foreground text-sm">
              Hi Im Phonsing Taleman, a passionate software developer with a
              background in computer engineering. I love creating innovative
              solutions and exploring new technologies.
            </p>
          </div>
          <div id="about-me">
            <h1 className="text-2xl font-bold">Changelog from my journey</h1>
            <p className="mt-2 text-muted-foreground text-sm">
              Here are some of the significant milestones and experiences that
              have shaped my career and personal growth.
            </p>
          </div>
          <AboutSection />
          <GitHubProfile />
        </div>
      </div>
    </section>
  );
}
