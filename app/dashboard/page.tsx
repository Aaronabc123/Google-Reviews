"use client";
import { SignedIn, SignedOut, SignIn } from '@clerk/nextjs';
const Dashboard: React.FC = () => {
  return (
    <div>
      <SignedIn>
        <div className="min-h-screen flex flex-wrap bg-gray-100">
          <div className="w-full flex flex-col items-center justify-center p-4 bg-white shadow">
            <h2 className="text-xl font-bold mb-4">WELCOME TO THE DASHNOARD</h2>

          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="min-h-screen overflow-scroll flex flex-wrap bg-gray-100">
          <div className="w-full flex flex-col items-center justify-center p-4 bg-white shadow">
            <SignIn />
          </div>
        </div>
      </SignedOut>

    </div>
  );
};

export default Dashboard;

