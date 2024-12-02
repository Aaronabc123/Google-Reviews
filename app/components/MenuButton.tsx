"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed md:hidden lg:hidden top-0 w-full inline-block text-left">
      <div
        className={`fixed md:hidden bg-red top-3 left-2 cursor-pointer justify-center z-50 ${ isOpen ? "menu-open" : "menu-closed"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
       { !isOpen&&<Image
              aria-hidden
              src="/images/menub2.png"
              alt="Store icon"
              width={30}
              height={30}
            />}
        { isOpen&&<Image
              aria-hidden
              src="/images/closeb2.png"
              alt="Store icon"
              width={30}
              height={30}
            />}
      </div>

      {isOpen && (
        <div className="absolute w-full h-screen z-10 mt-14 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsOpen(!isOpen)}
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsOpen(!isOpen)}
            >
              Review Rashboard
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
            <Link
              href="/support"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={() => setIsOpen(!isOpen)}
            >
              Support
            </Link>
            <Link
              href="/commingsoon"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Store
            </Link>
            <SignedIn>
              <div className="block px-4 py-2 gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400 hover:bg-gray-100">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </div>
  );
}
