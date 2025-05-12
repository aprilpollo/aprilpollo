import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Navbar } from "@/components/heroui/navbar";

export const baseOptions: BaseLayoutProps = {
  nav: {
    transparentMode:"top",
    component: <Navbar />,
  }
};
