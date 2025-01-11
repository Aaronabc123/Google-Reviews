import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import RecommendModal from "./RecommendModal";

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

const DropdownMenu: React.FC<ShareCardProps> = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const resetCardFactory = () => {
    alert("Card Factory Reset has been triggered.");
    // Add your reset logic here.
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="w-full flex justify-end items-center">
        <div
          className="w-fit cursor-pointer flex justify-end items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src="/icons/menu_b.png"
            alt="menuicon"
            className="text-xs text-gray-800"
            width={16}
            height={16}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <RecommendModal card={card} />
          <div className="border-t border-gray-200"></div>
          <div
            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={resetCardFactory}
          >
            <Image
              src="/icons/setting.png"
              alt="reset-icon"
              className="mr-3"
              width={16}
              height={16}
            />
            <div>
              <div className="text-sm text-red-600">Card Factory Reset</div>
              <div className="text-xs text-gray-800">
                Remove business and stats for Card
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
