"use client";
import { SignedIn} from "@clerk/nextjs";
import ReviewCard from "../components/ReviewCard";
const Dashboard: React.FC = () => {

  return (
    <div className="flex-grow">
      <SignedIn>
        <div className="w-full flex flex-col items-center justify-center pt-14 bg-white ">
          <ReviewCard />
        </div>
      </SignedIn>
    </div>
  );
};

export default Dashboard;
