"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ContributionsHeatmap,
  type ContributionsCollection,
} from "@/components/contributionsCollection";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";
interface primaryLanguageProps {
  name: string;
  color: string;
}

interface pinnedItemsProps {
  name: string;
  description: string;
  parent?: {
    nameWithOwner: string;
    url: string;
  };
  url: string;
  primaryLanguage: primaryLanguageProps;
}

function SkeletonGitHubProfile() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default function GitHubProfile() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [pinnedItems, setPinnedItems] = useState<pinnedItemsProps[]>([]);
  const [contributionsCollection, setContributionsCollection] =
    useState<ContributionsCollection>();

  const loadProfile = async () => {
    const res = await fetch("/api/github");
    const data = await res.json();
    setPinnedItems(data.pinnedItems.nodes);
    setContributionsCollection(data.contributionsCollection);
  };

  useEffect(() => {
    loadProfile();
    setIsLoaded(false);
  }, []);

  return (
    <section id="github-profile">
      <div className="flex flex-col gap-10">
        <h1 className="font-bold text-2xl">Pinned</h1>

        {isLoaded ? (
          <SkeletonGitHubProfile />
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {pinnedItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col lg:border-r py-5 relative group/feature dark:border-neutral-800 cursor-pointer h-36",
                      "lg:border-l dark:border-neutral-800",
                      index !== pinnedItems.length - 1 &&
                        index !== pinnedItems.length - 2 &&
                        "lg:border-b dark:border-neutral-800"
                    )}
                  >
                    <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
                    <div className="text-lg font-bold mb-2 relative z-10 px-4">
                      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-500/80 group-hover/feature:bg-purple-700 transition-all duration-200 origin-center" />
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        href={item.url}
                        className="hover:underline group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100"
                      >
                        {item.name}
                      </Link>
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 line-clamp-3">
                      {item.parent && (
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-muted-foreground text-sm">
                            Forked from
                          </span>
                          <Link
                            href={item.parent.url}
                            className="text-muted-foreground text-sm hover:underline"
                          >
                            {item.parent.nameWithOwner}
                          </Link>
                        </div>
                      )}
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-2xl">Contributions</h1>
              <ScrollArea className="">
                <ContributionsHeatmap
                  contributionsCollection={contributionsCollection}
                />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
