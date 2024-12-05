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
  viewDatesArr: Array<ViewDatesArr>;
  link:string;
  views: number;
  image: string;
  qrcod:string;
}
interface SettingsCardProps {
  card: CardData;
}

const SettingsModal: React.FC<SettingsCardProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex text-xs text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          aria-hidden
          src="/icons/settings.png"
          alt="settings_icon"
          width={16}
          height={16}
        />
        Settings
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            <h3 className="text-lg font-bold mb-4 text-center text-gray-800">
              Activating Your Google Card Service Card
            </h3>

            <label className="block text-gray-600 text-sm font-medium mb-1">
              Type your{" "}
              <span className="font-bold">Business Name and Address</span> below
              and select your business
            </label>
            <input
              type="text"
              placeholder="Type your Business Name and Address"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div className="relative w-full h-64 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.737070770573!2d-74.01168448459342!3d40.712776279331485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c2c8b8e7ff3a7a2!2sNew%20York!5e0!3m2!1sen!2sus!4v1634787745825!5m2!1sen!2sus"
                title="Business Location Map"
                className="relative inset-0 w-full h-full border rounded-lg"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <button
              className="block w-full bg-blue-500 text-white text-sm font-medium py-2 rounded hover:bg-blue-600"
              onClick={() => alert("Manual Entry clicked!")}
            >
              Manually Enter Google Business Link
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
