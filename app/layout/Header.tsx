import Link from "next/link"
import {
  SignInButton,
  SignedOut,
  UserButton,
  SignedIn

} from '@clerk/nextjs'

export default function Heaer() {
  return (
    <header className="row-start-3 bg-yellow-400 py-2 px-12 flex gap-6 h-14 flex-wrap items-center justify-center fixed  w-full">
      <Link href="/"
        className="absolute left-3 md:left-16 hover:no-undeline font-black px-3 bg-black text-white text-lg px-3 py-2 hover:bg-blue-500 rounded-xl"
      > 
        GOOGLE REVIEW
      </Link>
      <SignedOut>
        <div
          className="absolute right-3 md:right-16 right-16 hover:no-undeline bg-black text-white text-xs px-3 py-2 hover:bg-blue-500 font-bold rounded"
        >
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
      <Link href="/dashboard"
        className="flex items-center gap-2 hover:no-undeline bg-black text-white text-xs px-3 py-2 hover:bg-blue-500 font-bold rounded"
      >
        Dashboard
      </Link>
     <Link href="/commingsoon"
        className="flex items-center gap-2 hover:no-undeline bg-black text-white text-xs px-3 py-2 hover:bg-blue-500 font-bold rounded"  
      >
        Review Dashboard
      </Link>
      </SignedIn>
      <div
        className="absolute right-16 items-center gap-2 hover:no-undeline"
      >
        <UserButton />
      </div>
    </header>
  );
}
