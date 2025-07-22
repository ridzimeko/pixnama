"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { FrameIcon } from "@radix-ui/react-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-16 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              {/* <LogoIcon /> */}
              Pixnama
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />
            <Button asChild className="ml-4">
              <Link href="/create">
                <FrameIcon />
                Buat Twibbon
              </Link>
            </Button>
          </span>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
            <Button asChild>
              <Link href="/create">
                <FrameIcon />
                Buat Twibbon Baru
              </Link>
            </Button>
            <Button asChild variant="ghost" className="ml-4">
              <Link href="/login">Masuk</Link>
            </Button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
