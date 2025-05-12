"use client";
import { useState } from "react";
import { Divider } from "@heroui/divider";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { User } from "@heroui/user";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/heroui/theme-switch";
import { GithubIcon } from "@/components/heroui/icons";
import { Instagram } from "lucide-react";
import { RxRocket } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import NextLink from "next/link";
import { SearchUI, SearchButtonUI } from "./search";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="static"
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <RxRocket className=" size-6" />
            <p className="font-bold text-inherit text-lg">APRILPOLLO</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link
            aria-label="Blog"
            href="/"
            color={
              pathname === "/" || pathname.startsWith("/blog")
                ? "primary"
                : "foreground"
            }
          >
            Blog
          </Link>
          <Link
            aria-label="Profile"
            href="/profile"
            color={pathname === "/profile" ? "primary" : "foreground"}
          >
            Profile
          </Link>
        </NavbarItem>
        <Divider orientation="vertical" className="h-5" />
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
            <Instagram  className="text-default-500 size-5" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <SearchUI />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <User
            avatarProps={{
              src: siteConfig.profile.avatar,
              size: "sm",
              isBordered: true,
            }}
            description={siteConfig.profile.bio}
            name={<p className="font-bold">{siteConfig.profile.nickname}</p>}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <SearchButtonUI />
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu>
        <div className="mb-2 flex gap-2">
          <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
            <Instagram className="text-default-500 size-5" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        </div>
        <button
          aria-label="Blog"
          onClick={() => {
            setIsMenuOpen(false);
            router.push("/");
          }}
          className={`flex justify-start ${
            pathname === "/" || pathname.startsWith("/blog")
              ? "text-primary"
              : "text-foreground"
          }`}
        >
          Blog
        </button>
        <button
          aria-label="Profile"
          onClick={() => {
            setIsMenuOpen(false);
            router.push("/profile");
          }}
          className={`flex justify-start ${
            pathname === "/profile" ? "text-primary" : "text-foreground"
          }`}
        >
          Profile
        </button>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
