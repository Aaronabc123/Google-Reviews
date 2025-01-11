import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ViewDatesArr {
  date: string;
}

interface EditableCard {
  id: string;
  name: string;
  address: string;
  link: string;
  viewDatesArr: Array<ViewDatesArr>;
  views: number;
  image: string;
  qrcod: string;
}

interface EditableCardProps {
  card: EditableCard;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}
const EditableCard: React.FC<EditableCardProps> = ({
  card,
  setCount,
  count,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(card.name);
  const [editedAddress, setEditedAddress] = useState(card.address);

  const handleUpdate = async () => {
    const updatedCard = {
      id: card.id,
      name: editedName,
      address: editedAddress,
      link: card.link,
      viewDatesArr: card.viewDatesArr,
    };

    try {
      const response = await fetch("/api/cards", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCard),
      });

      if (!response.ok) {
        throw new Error("Failed to update card");
      }

      const updatedData = await response.json();
      if (updatedData) {
        setCount(count + 1);

        setTimeout(() => {
          setIsEditing(false);
        }, 1000);
        console.log("count:--", count);
      }
    } catch (error) {
      console.error("Error updating card:", error);
    }
  };

  const handleCancel = () => {
    setEditedName(card.name);
    setEditedAddress(card.address);
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white border border-dashed rounded-t-lg max-w-md">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="Enter name"
          />
          <textarea
            value={editedAddress}
            onChange={(e) => setEditedAddress(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            rows={3}
            placeholder="Enter address"
          ></textarea>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCancel}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-red-500">✖ Cancel</span>
            </button>
            <button
              onClick={handleUpdate}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              ✔ Update
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-sm text-gray-800">{card.name}</h2>
              <div className="flex">
                <p className="text-xs text-gray-500">{card.address}</p>
                <div className="flex cursor-pointer">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-sm text-red-800 -scale-x-100 transform ml-5"
                  >
                    ✎
                  </button>
                </div>
              </div>
            </div>

            <Link
              href={`/review/${card.id}`}
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-xs text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-1">View</span>
              <Image
                src="/icons/link.png"
                alt="linkicon"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableCard;
