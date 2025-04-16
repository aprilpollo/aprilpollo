"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export function BgInteractiveGridPattern() {
  return (
    <div className="relative flex h-48 sm:h-56 md:h-64 lg:h-96 w-full flex-col items-center justify-center overflow-hidden border-x bg-background">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
        )}
        width={40}
        height={40}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />
    </div>
  );
}
