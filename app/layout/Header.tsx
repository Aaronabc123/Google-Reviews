"use client";
import Link from "next/link";
import { SignInButton, SignedOut, UserButton, SignedIn } from "@clerk/nextjs";
import MenuButton from "../components/MenuButton";

export default function Header() {
  return (
    <div>
      
      <header className="row-start-3 z-20 bg-yellow-400 py-2 px-12 flex gap-6 h-14 flex-wrap items-center justify-center fixed  w-full">
      <MenuButton />
        <Link
          href="/"
          className="absolute md:left-32 hover:no-undeline font-black px-3 bg-black text-white text-sm px-3 py-2 hover:bg-blue-500 rounded-xl"
        >
          GOOGLE REVIEW
        </Link>
        <SignedOut>
          <div className="absolute right-3 md:right-16 right-16 hover:no-undeline bg-black text-white text-xs px-3 py-2 hover:bg-blue-500 font-bold rounded">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <Link
            href="/dashboard"
            className="flex items-center hidden md:flex gap-2 hover:no-undeline bg-black text-white text-xs px-3 py-2 hover:bg-blue-500 font-bold rounded"
          >
            Dashboard
          </Link>
          <Link
            href="/commingsoon"
            className="flex items-center hidden md:flex gap-2 hover:no-undeline bg-black text-white text-xs px-3 py-2 hover:bg-blue-500 font-bold rounded"
          >
            Review Dashboard
          </Link>
        </SignedIn>
        <div className="absolute right-2 md:right-32 top-4 items-center gap-2 hover:no-undeline">
          <UserButton />
        </div>
      </header>
    </div>
  );
}
