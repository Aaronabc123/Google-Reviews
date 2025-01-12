import React from "react";
import Link from "next/link"
const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col mt-12 items-center justify-center text-gray-800 px-4">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl hidden font-bold mb-4 text-center text-blue-600">
          About Instantly Review Us
        </h1>
        <p className="text-lg mb-4">
          At <span className="font-semibold text-blue-600">Instantly Review Us</span>, we
          simplify success by turning customer feedback into your strongest
          asset. Using NFC-powered cards, stickers, and stands, we make
          collecting reviews effortless—just a tap away.
        </p>
        <p className="text-lg mb-4">
          More reviews mean better SEO, increased trust, and higher sales,
          creating a growth cycle that fuels visibility and attracts new
          customers.
        </p>
        <p className="text-lg mb-4">
          Join <span className="font-semibold text-blue-600">Instantly Review Us</span> to
          boost your ratings, enhance credibility, and accelerate business
          growth. Your next level of success starts with a tap!
        </p>
        <div className="text-center mt-6">
          <Link href="/"
            className="inline-block px-6 py-3 bg-yellow-400 text-white text-lg rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
