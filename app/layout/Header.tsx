import Image from "next/image";
import {
  SignInButton,
  SignedOut,
  UserButton,
  SignedIn

} from '@clerk/nextjs'

export default function Heaer() {
  return (
    <header className="row-start-3 bg-yellow-400 py-2 px-12 flex gap-6 flex-wrap items-center justify-center fixed  w-full">
      <a
        className="flex items-center gap-5 mr-22 hover:no-undeline px-3 bg-gray-800 text-white px-3 py-1 hover:bg-[#0284c7] rounded-xl"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Logo
      </a>{" "}
      <SignedOut>
        <div
          className="flex items-center gap-2 hover:no-undeline bg-gray-800 text-white px-3 py-1 hover:bg-[#0284c7] rounded"
        >
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
      <a
        className="flex items-center gap-2 hover:no-undeline bg-gray-800 text-white px-3 py-1 hover:bg-[#0284c7] rounded"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dashboard
      </a>

      <a
        className="flex items-center gap-2 hover:no-undeline bg-gray-800 text-white px-3 py-1 hover:bg-[#0284c7] rounded"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Review Dashboard
      </a>
      </SignedIn>
      <div
        className="flex de items-center gap-2 hover:no-undeline"
      >
        <UserButton />
      </div>
    </header>
  );
}
