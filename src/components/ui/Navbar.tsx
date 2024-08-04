"use client";

import * as React from "react";
import {
  NavigationLegacy,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { navigationMenuTriggerStyle } from "@/components/ui/NavigationMenu";
import { ModeToggle } from "@/components/ui/ThemeToggleButton";
import { AuthButton } from "@/components/ui/AuthButton";
import Link from "next/link";
import Image from "next/image";
import { MobileMenuToggle } from "@/components/ui/MobileMenu";

// TODO: types later
// component is used when user does not customize the navbar at all
// once they customize it, it will be voided and replaced with Navbar() (in theory)
export function StaticNavbar(items?: object) {
  return (
    <div className="top-0 milky-glass flex items-center w-full z-50">
      <NavigationMenu className="flex w-full items-center">
        <Link href="/" passHref className="hidden md:flex">
          <NavigationLegacy className="flex items-center">
            <Image
              src="https://cdn.discordapp.com/embed/avatars/0.png"
              alt="Bot Avatar"
              width={45}
              height={45}
              className="rounded-full"
            />
            <h2 className="md:text-2xl font-bold">Fafa</h2>
          </NavigationLegacy>
        </Link>
        <div className="flex-grow hidden md:flex justify-start p-4">
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="flex">
              <Link href="/dash" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mx-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
              <Link href="/status" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mx-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`}
                >
                  Status
                </NavigationMenuLink>
              </Link>
              <Link href="/invite" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mx-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`}
                >
                  Invite
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <div className="flex justify-end p-4 w-full space-x-1">
            <AuthButton />
            <ModeToggle />
            <div className="md:hidden">
            <MobileMenuToggle />
          </div>
        </div>
      </NavigationMenu>
    </div>
  );
}