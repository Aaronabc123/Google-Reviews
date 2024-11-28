"use client";
import { useEffect, useRef, useState } from "react";
import Link from"next/link"
import Image from "next/image";
import {
  SignInButton,
  SignedOut,

} from '@clerk/nextjs'
const images = [
  "https://revuzee.com/cdn/shop/files/71FM6pDhuiL._AC_SL1500.jpg?v=1723331485&width=1500",
  "https://m.media-amazon.com/images/I/81tMa4aXv2L._AC_UF894,1000_QL80_.jpg",
  "https://review.cards/wp-content/uploads/2024/03/Google-NFC_QR-Code-Landscapr_portrait-image-isolate-1.png",
];

const Home: React.FC = () => {
  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length 
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  useEffect(() => {
    if (rightSectionRef.current) {
      rightSectionRef.current.scrollTo({
        top: currentImageIndex * 150,
        behavior: "smooth",
      });
    }
  }, [currentImageIndex]);

  return (
    <div className="min-h-screen flex flex-wrap bg-gray-100">
      <div className="md:w-2/5 w-full flex flex-col items-center justify-center p-4 bg-white shadow">
        <h2 className="text-xl font-bold mt-10 md:my-4  font-black px-3 text-2xl md:text-4xl">GOOGLE REVIEW</h2>
        <div className="row-start-3 hidden md:flex gap-6 flex-wrap items-center justify-center">
        <Link href="/commingsoon" className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/icons/store.png"
              alt="Store icon"
              width={16}
              height={16}
            />
            Store
          </Link>
          <SignedOut>
          |
            <div
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <Image
                aria-hidden
                src="/icons/login.png"
                alt="Login icon"
                width={16}
                height={16}
            />
              <SignInButton />

            </div>
          </SignedOut>
        </div>
      </div>
      <div
        ref={rightSectionRef}
        className="md:w-3/5 md:mt-14 bg-gray-200 shadow "
      >
        <div className="w-full">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Photo ${index + 1}`}
              className="rounded shadow h-screen"
              style={{
                display: currentImageIndex === index ? "block" : "none",
                width: "100%",
                height: "auto",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
