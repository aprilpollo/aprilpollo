import type { ReactNode } from "react";
import { Skeleton } from "@heroui/skeleton";

export function Loader({
  children,
  loader,
}: {
  children: ReactNode;
  loader: boolean;
}) {
  return (
    <Skeleton isLoaded={loader} className=" rounded-md min-h-28">
      {children}
    </Skeleton>
  );
}
