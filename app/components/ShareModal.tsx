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
  qrcod:string;
}

interface ShareCardProps {
  card: CardData;
}

const ShareModal: React.FC<ShareCardProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://google-review-fai.vercel.app/review/${card.id}`);
    alert("Link copied to clipboard!");
  };

  return (
    <>
    <div className="flex text-xs text-gray-600 hover:text-gray-800 cursor-pointer" onClick={() => setIsOpen(true)}>
              <Image
                aria-hidden
                src="/icons/share.png"
                alt="Share_icon"
                width={16}
                height={16}
            />
                Share
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
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-green-500 hover:text-green-700">
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <i className="fab fa-linkedin text-2xl"></i>
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

            <div className="flex flex-col items-center">
              <img
                src={card.qrcod} 
                alt="QR Code"
                className="w-32 h-32 mb-4"
              />
               <a href={card.qrcod} download>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                onClick={() => alert("QR Code Downloaded!")} 
              >
                Download QR
              </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShareModal;
