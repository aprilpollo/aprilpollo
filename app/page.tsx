"use client" 

import {ScrollShadow} from "@heroui/react";
import Profile from "@/components/apps/home/profile";

export default function Page() {
  return (
    <ScrollShadow hideScrollBar className="container max-w-7xl mx-auto profile px-4">
      <Profile/>
    </ScrollShadow>
  )
}
