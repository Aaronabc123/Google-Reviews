"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SignInButton,
  SignedOut,

} from '@clerk/nextjs'
const images = [
  "https://revuzee.com/cdn/shop/files/71FM6pDhuiL._AC_SL1500.jpg?v=1723331485&width=1500",
  "https://reviewcards.co.uk/wp-content/uploads/2024/08/2-Google-Review-Cards-768x768.jpg",
  "https://cdn.shopify.com/s/files/1/0774/1607/1474/files/img-1097-2-66685306b2e20.webp?v=1718113075&width=2048",
];

const Home: React.FC = () => {
  const rightSectionRef = useRef<HTMLDivElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 2000);

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
        <h2 className="text-xl font-bold mb-4">"Company name"</h2>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
            Store
          </a>{" "}
          |
          <SignedOut>
            <div
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            >
              <SignInButton />

            </div>
          </SignedOut>
        </div>
      </div>
      <div
        ref={rightSectionRef}
        className="md:w-3/5 w-full h-screen p-4 bg-gray-200 shadow overflow-scroll"
      >
        <div className="h-full] h-scroll">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Photo ${index + 1}`}
              className="rounded shadow h-screen"
              style={{
                display: currentImageIndex === index ? "block" : "none",
                width: "70%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
