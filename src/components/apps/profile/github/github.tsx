"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Album, Binary } from "lucide-react";
import { getMonthLabels, toColumnMajor, forMatted } from "./helper";
import { Loader } from "./loader";

interface primaryLanguageProps {
  name: string;
  color: string;
}
interface pinnedItemsProps {
  name: string;
  description: string;
  url: string;
  primaryLanguage: primaryLanguageProps;
}

interface contributionDaysProps {
  date: string;
  contributionCount: number;
  color: string;
}

interface weeksProps {
  contributionDays: contributionDaysProps[];
}

export default function GirhubProfile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pinnedItems, setPinnedItems] = useState<pinnedItemsProps[]>([]);
  const [weeks, setWeeks] = useState<weeksProps[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  useEffect(() => {
    const loadProfile = async () => {
      const res = await fetch("/api/github");
      const data = await res.json();

      setPinnedItems(data.pinnedItems.nodes);
      setWeeks(data.contributionsCollection.contributionCalendar.weeks);
      setTotalContributions(
        data.contributionsCollection.contributionCalendar.totalContributions
      );
    };
    loadProfile();
    setIsLoaded(true);
  }, []);

  const days = weeks.flatMap((w) => w.contributionDays);
  const monthLabels = getMonthLabels(days);
  const orderedDays = toColumnMajor(days);

  return (
    <section id="girhub-profile">
      <div className="flex flex-col gap-4">
        <p className="font-bold">Pinned</p>
        <Loader loader={isLoaded}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {pinnedItems.map((item, index) => (
              <Card key={index} className="shadow-none border rounded-md">
                <CardHeader className="flex gap-2">
                  <Album className="size-4 text-default-600" />
                  <Link isExternal href={item.url} className="text-sm">
                    {item.name}
                  </Link>
                </CardHeader>
                <CardBody className="py-0">
                  <p className="text-xs text-default-500">{item.description}</p>
                </CardBody>

                <CardFooter className="flex gap-2">
                  <Binary
                    className="ml-[-4px] size-4"
                    color={item.primaryLanguage.color}
                  />
                  <span className="text-xs text-default-500">
                    {item.primaryLanguage.name}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Loader>
        <p className="font-bold">Contributions</p>
        <Loader loader={isLoaded}>
          <div className="border p-4  rounded-md">
            <ScrollShadow orientation="horizontal" offset={100} hideScrollBar>
              <div className="min-w-3xl px-2">
                <div className="grid grid-cols-52 text-xs text-muted-foreground ">
                  {monthLabels.map((label, i) => (
                    <span key={i} className="h-4 text-left">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-52 grid-rows-7 gap-[2px] ">
                  {orderedDays.map((day, i) =>
                    day ? (
                      <Tooltip
                        key={day.date}
                        content={` ${
                          day.contributionCount
                        } contributions on ${forMatted(day.date)}`}
                      >
                        <div
                          className="w-3 h-3 rounded-xs border"
                          style={{
                            backgroundColor:
                              day.color == "#ebedf0" ? "" : day.color,
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <div key={i} className="w-3 h-3" />
                    )
                  )}
                </div>
              </div>
            </ScrollShadow>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground px-1 ">
              <span>{totalContributions} contributions</span>
              <div className="flex items-center gap-2">
                <span>Less</span>
                <div className="flex gap-[2px]">
                  {["", "#0e4429", "#006d32", "#26a641", "#39d353"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-xs border"
                        style={{ backgroundColor: color }}
                      />
                    )
                  )}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </Loader>
      </div>
    </section>
  );
}
