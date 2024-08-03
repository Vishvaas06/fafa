"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { navigationMenuTriggerStyle } from "@/components/ui/NavigationMenu";
import { ModeToggle } from "@/components/ui/ThemeToggleButton";
import { AuthButton } from "@/components/ui/AuthButton";
import Link from "next/link";

// TODO: types later
// component is used when user does not customize the navbar at all
// once they customize it, it will be voided and replaced with Navbar() (in theory)
export function StaticNavbar(items?: object) {
  // items should contain name, href and maybe icon, might change though to make the setup more compact
  // for now its just psydo code
  // TODO: implement logic
  return (
    <div className="top-0 milky-glass flex items-center w-full z-50">
      <NavigationMenu className="flex w-full">
        <div className="flex justify-start p-4 w-full">
          <NavigationMenuList className="flex w-full">
            <NavigationMenuItem className="flex w-full">
              <Link href="/dash" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mx-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
              <Link href="/status" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mx-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hidden md:block`}
                >
                  Status
                </NavigationMenuLink>
              </Link>
              <Link href="/invite" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} mx-1 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hidden md:block`}
                >
                  Invite
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <div className="flex justify-end p-4 w-full">
          <AuthButton />
          <ModeToggle />
        </div>
      </NavigationMenu>
    </div>
  );
}