import { useState } from "react";
import Image from "next/image";

interface ViewDatesArr {
  date: string; // ISO format preferred for dates
  count: number;
}
interface CardData {
  id: string;
  name: string;
  address: string;
  link: string;
  viewDatesArr: Array<ViewDatesArr>;
  views: number;
  image: string;
  qrcod: string;
}

interface ShareCardProps {
  card: CardData;
}

const ShareModal: React.FC<ShareCardProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://google-review-fai.vercel.app/review/${card.id}`
    );
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <div
        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/icons/thumb.png"
          alt="thumb-icon"
          className="mr-3"
          width={16}
          height={16}
        />
        <div>
          <div className="text-sm text-gray-800">Recommend this product</div>
          <div className="text-xs text-gray-800">
            Share googlereview card with friends
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold mb-4">Share</h3>
            <div className="flex justify-around mb-6">
              <a
                href={`http://twitter.com/share?text=Please give us a review on this link&url=https://google-review-fai.vercel.app/review/${card.id}`}
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
              >
                <Image
                  src="/icons/twitter.png"
                  alt="twittercon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href={`http://whatsapp.com/share?text=Please give us a review on this link&url=https://google-review-fai.vercel.app/review/${card.id}`}
                target="_blank"
                className="text-blue-400 hover:text-blue-600"
              >
                <Image
                  src="/icons/whatsapp.png"
                  alt="whatappicon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href={`http://facebook.com/share?text=Please give us a review on this link&url=https://google-review-fai.vercel.app/review/${card.id}`}
                target="_blank"
                className="text-green-500 hover:text-green-700"
              >
                <Image
                  src="/icons/facebook.png"
                  alt="facebookicon"
                  width={16}
                  height={16}
                />
              </a>
              <a
                href={`http://linkedin.com/share?text=Please give us a review on this link&url=https://google-review-fai.vercel.app/review/${card.id}`}
                target="_blank"
                className="text-blue-700 hover:text-blue-900"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="linkedinicon"
                  width={16}
                  height={16}
                />
              </a>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="text"
                value={`https://google-review-fai.vercel.app/review/${card.id}`}
                readOnly
                className="w-full px-2 py-1 border rounded-l-md text-sm"
              />
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 bg-blue-500 text-white rounded-r-md"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareModal;
