"use client";

import * as React from "react";

import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Skeleton } from "@/components/ui/Skeleton";

import { toast } from "sonner";

export function AuthButton() {
  const [isAuthed, setIsAuthed] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  function logout() {
    toast("Logged Out", {
      description: "You successfully logged out.",
    });

    setIsAuthed(false);
  }

  function login() {
    toast("Logged In", {
      description: "You successfully authorized with Discord.",
    });

    setIsAuthed(true);
    setLoading(true);

    /* temporary "loading" effect to see how it looks as regular components will need loading later on */
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }

  return (
    <>
      {isAuthed ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="mx-2 flex items-center space-x-2"
              variant="outline"
            >
              {isLoading ? (
                <>
                  <Skeleton className="mr-2 w-6 h-6 rounded-full" />
                  <Skeleton className="w-16 h-4" />
                </>
              ) : (
                <>
                  <Avatar className="mr-2 flex-shrink-0 w-6 h-6">
                    <AvatarImage src="https://cdn.discordapp.com/embed/avatars/0.png" />
                    <AvatarFallback>FE</AvatarFallback>
                  </Avatar>
                  Ferel
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            { /* probably not gonna add switching accounts but meh */ }
            <DropdownMenuItem>Switch Account</DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button className="mx-2" variant="outline" onClick={login}>
          Login
        </Button>
      )}
    </>
  );
}