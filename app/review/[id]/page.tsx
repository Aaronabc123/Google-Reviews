"use client"
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Spinner from "../../components/Spinner"

const ReviewPage = () => { 
  const { id } = useParams();
  console.log(id);
  const [loading, setLoading] = useState<boolean>(true);
  const [review, setReview] = useState<string | null>(null);

  useEffect(() => {
    const fetchReview = async () => {
      if (!id){
        return(<div className="flex items-center justify-center min-h-screen  text-white">
          <Spinner />
        </div>)
      }
      try {
        const res = await fetch(`/api/reviews/${id}`);
        const data = await res.json();
        setReview(data.redirect);
      } catch (error) {
        console.error("Error fetching review:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchReview();
    }
  }, [id]);

  useEffect(() => {
    if (review) {
      window.location.href = review;
    }
  }, [review]);

  if (loading) return <div className="flex items-center justify-center min-h-screentext-white">
  <Spinner />
</div>;
  if (!review) return <div className="flex items-center justify-center min-h-screentext-white">
  <Spinner />
</div>;

  return (
    <div className="flex items-center justify-center min-h-screentext-white">
      <Spinner />
    </div>
  );
};

export default ReviewPage;

