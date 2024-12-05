import Link from 'next/link';
import { SignInButton, SignedOut, SignedIn, SignOutButton } from "@clerk/nextjs";

export default function Footer() {
  return (
    <footer className="bg-gray-100 md:relativ py-5 w-full">
      <div className="row-start-3 flex gap-6 flex flex-wrap items-center justify-center">
      <Link href="/commingsoon" className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400">
          Store
        </Link>
        <SignedOut>
        |
          <div className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400">
            <SignInButton />
          </div>
        </SignedOut>

        <SignedIn>
        |
          <div className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400">
            <SignOutButton />
          </div>
        </SignedIn>
        |
        <Link href="/about" className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >

          About
        </Link>
        |
        <Link href="/support" className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400"
          rel="noopener noreferrer"
        >
          Support
        </Link>
      </div>

      <div className="row-start-3 flex gap-6 flex flex-wrap items-center justify-center">
        © Copyright 2024 Google review
      </div>
    </footer>
  );
}
