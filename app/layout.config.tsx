import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GiCurlyWing } from "react-icons/gi";
import { siteConfig } from "@/config/site";

export const baseOptions: BaseLayoutProps = {
  nav: {
    // component: <div className="border"> Nav</div>
    title: (
      <>
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
          <GiCurlyWing className="size-5" />
        </div>
        {siteConfig.titleweb}
      </>
    ),
   
  },
};
