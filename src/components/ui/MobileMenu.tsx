"use client";

import * as React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useRouter } from "next/navigation";

export function MobileMenuToggle() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation
  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="md:hidden p-4 bg-background">
        <DropdownMenuItem onClick={() => handleNavigation('/dash')}>
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation('/status')}>
          Status
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleNavigation('/invite')}>
          Invite
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}