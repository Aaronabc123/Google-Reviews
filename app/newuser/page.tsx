"use client"
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Spinner from "../components/Spinner"
const ReviewPage = () => { 
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const saveUser = async () => {
      try {
        await fetch(`/api/auth/newuser`);
        window.location.href = "/dashboard";

      } catch (error) {
        console.error("Error fetching review:", error);
        setLoading(false);
 
      } finally {
        setLoading(false);
      }
    };
    
    saveUser();
    
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      {loading&&<Spinner />}
    </div>
  );
};

export default ReviewPage;

