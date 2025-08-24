"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Items {
  title: string;
  description: string;
  icon?: React.ReactNode;
  slug: string;
}
interface featuresProps {
  items: Items[];
}

const Feature = ({
  title,
  description,
  slug,
  icon,
  index,
}: {
  title: string;
  description: string;
  slug: string;
  icon?: React.ReactNode;
  index: number;
}) => {
  return (
    <Link
      href={slug}
      className={cn(
        "flex flex-col lg:border-r py-5 relative group/feature dark:border-neutral-800 cursor-pointer max-w-3xl h-36",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {icon && (
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
      )}
      <div className="text-lg font-bold mb-2 relative z-10 px-4">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-500/80 group-hover/feature:bg-purple-700 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 line-clamp-3">
        {description}
      </p>
    </Link>
  );
};

export default function BogItems({ items }: featuresProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <Feature key={`${item.title}-${index}`} {...item} index={index} />
      ))}
    </div>
  );
}

export const BogItemRow = ({
  items,
}: {
  items: { title: string; description: string; url: string }[];
}) => {
  const pathname = usePathname();
  return (
    <>
      {items.map((p, i) => (
        <Link
          key={i}
          href={p.url}
          className={cn(
            "flex flex-col py-5 relative group/feature dark:border-neutral-800 cursor-pointer max-w-3xl h-36",
            "lg:border-l dark:border-neutral-800",
            i < items.length - 1 && "lg:border-b dark:border-neutral-800",
          )}
        >
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          <div className="text-lg font-bold mb-2 relative z-10 px-4">
            <div
              className={cn(
                "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-500/80 group-hover/feature:bg-purple-700 transition-all duration-200 origin-center",
                pathname === p.url && "bg-purple-700"
              )}
            />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
              {p.title}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 line-clamp-3">
            {p.description}
          </p>
        </Link>
      ))}
    </>
  );
};

export const BogItemCal = ({
  items,
}: {
  items: { title: string; description: string; url: string }[];
}) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      {items.map((p, i) => (
        <Link
          key={i}
          href={p.url}
          className={cn(
            "flex flex-col py-5 relative group/feature dark:border-neutral-800 cursor-pointer min-w-fit h-36",
            "lg:border-l dark:border-neutral-800",
            i < items.length - 1 && "lg:border-b dark:border-neutral-800",
          )}
        >
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
          <div className="text-lg font-bold mb-2 relative z-10 px-4">
            <div
              className={cn(
                "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-500/80 group-hover/feature:bg-purple-700 transition-all duration-200 origin-center",
                pathname === p.url && "bg-purple-700"
              )}
            />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
              {p.title}
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 line-clamp-3">
            {p.description}
          </p>
        </Link>
      ))}
    </div>
  );
};
