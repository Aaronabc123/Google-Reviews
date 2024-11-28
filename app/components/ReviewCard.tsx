import { useEffect, useState } from "react";
import Image from "next/image";
import ShareModal from "./ShareModal";
import StatisticsModal from "./StatisticsModal";
import SettingsModal from "./SettingsModal";
import Spinner from "./Spinner";

interface viewDatesArr {
  date: string; // ISO format preferred for dates
  count: number;
}
interface CardData {
  id: string;
  name: string;
  address: string;
  viewDatesArr: Array<viewDatesArr>;
  link:string;
  views: number;
  image: string;
  qrcod:string;
}

const FilterableCards = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>("Oldest");

  console.log("cards:---", cards)

  // Fetch cards from API
  useEffect(() => {
    const fetchCards = async () => {
      try{
      const res = await fetch("/api/cards");
      const data = await res.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      // Wait for 3 seconds before stopping the loading state
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    };
    fetchCards();
  }, []);

  const handleSort = (criteria: string) => {
    let sortedCards: CardData[] = [...cards];
    if (criteria === "Oldest") {
      sortedCards = [...cards].sort((a, b) => a.id.localeCompare(b.id));
    } else if (criteria === "Newest") {
      sortedCards = [...cards].sort((a, b) => b.id.localeCompare(a.id));
    } else if (criteria === "Views") {
      sortedCards = [...cards].sort((a, b) => b.views - a.views);
    } else if (criteria === "Alphabetic") {
      sortedCards = [...cards].sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "Reverse Alphabetic") {
      sortedCards = [...cards].sort((a, b) => b.name.localeCompare(a.name));
    }
    setCards(sortedCards);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCriteria = e.target.value;
    setSortBy(selectedCriteria);
    handleSort(selectedCriteria);
  };

  return (
    <div className="p-6 space-y-6">
      {loading && ( <Spinner />)}
      {cards.length > 0 ? (
        <div>
          <div className="flex flex-wrap gap-4 items-center justify-center p-4 mb-5 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50 w-full max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow outline-none text-gray-600 bg-transparent"
              />
              <button className="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            {/* Device Type Dropdown */}
            <div>
              <select className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-600 outline-none cursor-pointer">
                <option value="Google Stand" className="text-xs">
                  All
                </option>
                <option value="Google Stand" className="text-xs">
                  Google Card
                </option>
                <option value="Sticker" className="text-xs">
                  Google Sticker
                </option>
                <option value="Stand" className="text-xs">
                  Google Stand
                </option>
                <option value="Plate" className="text-xs">
                  Google Plate
                </option>
                <option value="Instagram" className="text-xs">
                  Instagram
                </option>
                <option value="Facebook" className="text-xs">
                  Facebook
                </option>
              </select>
            </div>

            {/* Sort By Dropdown */}
            <div>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 text-gray-600 outline-none cursor-pointer"
              >
                <option value="Oldest" className="text-xs">
                  Oldest
                </option>
                <option value="Newest" className="text-xs">
                  Newest
                </option>
                <option value="Views" className="text-xs">
                  Most Views
                </option>
                <option value="Alphabetic" className="text-xs">
                  Alphabetic
                </option>
                <option value="Reverse Alphabetic" className="text-xs">
                  Reverse Alphabetic
                </option>
              </select>
            </div>
          </div>
          <div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {cards.map((card:CardData) => (
                <div
                  key={card.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="font-bold text-sm text-gray-800">
                          {card.name}
                        </h2>
                        <p className="text-xs text-gray-500">{card.address}</p>
                      </div>
                      <a
                        href="https://g.page/r/CYPTkct1jx9NEBM/review"
                        className="flex text-blue-500 text-xs hover:underline"
                        title="View Details"
                      >
                        <span className="mr-1">View</span>
                        <Image
                          aria-hidden
                          src="/icons/link.png"
                          alt="link_icon"
                          width={16}
                          height={16}
                        />
                      </a>
                    </div>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="mx-auto h-48 object-cover"
                    />
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-gray-600">
                        <span>Views:</span> {card.views}
                      </div>
                      <p className="text-xs text-gray-400">
                        Device ID: {card.id}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 border-t border-gray-200 p-4 flex justify-between items-center">
                    <ShareModal card = {card}/>
                    <StatisticsModal card = {card}/>
                    <SettingsModal card = {card}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ):(
        <div className="p-6 max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg bg-red">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/icons/logo.png"
              alt="GoogleService Icon"
              className="w-8 h-8"
            />
            <h2 className="text-xl font-semibold text-yellow-500">
              Google Service Device
            </h2>
          </div>

          {/* Message */}
          <div className="text-lg text-red-600 font-bold mb-4">
            No GoogleService devices are activated
          </div>

          <p className="text-sm text-gray-700 mb-6">
            To activate a device to your business, follow these easy steps:
          </p>

          {/* Steps List */}
          <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700 mb-6">
            <li>
              Scan the QR code on the GoogleService device (card, sticker, or
              stand)
            </li>
            <li>Create or Sign-in to your GoogleServicestars.com account</li>
            <li>
              On the &quot;Activating your GoogleService Device&quot; screen, type in your
              Business name and Address and select it.
            </li>
            <li>Your GoogleService tap device is now setup!</li>
            <li>
              If you have more devices, activate them using the same steps
              above.
            </li>
          </ol>

          {/* Call to Action */}
          <p className="text-sm text-gray-600 mb-4">
            Enjoy the boost in reviews, SEO, and customers!
          </p>

          <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 focus:outline-none">
            Unlock 20% Off: Grab Your GoogleService products Now!
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterableCards;
