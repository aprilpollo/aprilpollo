"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Album, Binary } from "lucide-react";
import { Loader } from "./loader";
import GitHubCalendar from 'react-github-calendar';

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


export default function GirhubProfile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pinnedItems, setPinnedItems] = useState<pinnedItemsProps[]>([]);
  useEffect(() => {
    const loadProfile = async () => {
      const res = await fetch("/api/github");
      const data = await res.json();
      setPinnedItems(data.pinnedItems.nodes);
    };
    loadProfile();
    setIsLoaded(true);
  }, []);

  return (
    <section id="girhub-profile">
      <div className="flex flex-col gap-10">
       <div className="flex flex-col gap-4">
         <p className="font-bold">Pinned</p>
        <Loader loader={isLoaded}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {pinnedItems.map((item, index) => (
              <Card key={index} className="shadow-none border rounded-md h-28">
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
       </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">Contributions</p>
        <Loader loader={isLoaded}>
          <GitHubCalendar username="phonsing-hub" />
        </Loader>
        </div>
      </div>
    </section>
  );
}
