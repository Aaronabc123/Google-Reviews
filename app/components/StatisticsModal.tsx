import { useState } from "react";
import { Line } from "react-chartjs-2";
import Image from "next/image";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
} from "chart.js";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

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

interface StatisticsModalProps {
  card: CardData; // Define the `card` prop type
}

const StatisticsModal: React.FC<StatisticsModalProps> = ({ card }) => {

  console.log("card:---", card)
  const [isOpen, setIsOpen] = useState(false);

  // Chart Data
  const data = {
    labels: 
    [
      "2024-10-23",
      "2024-10-25",
      "2024-11-19",
      "2024-11-21",
      "2024-11-24",
      "2024-11-25",
    ]
    ,
    datasets: [
      {
        label: "Count",
        data: [1, 8, 0, 0, 19, 1],
        borderColor: "#38BDF8",
        backgroundColor: "rgba(56, 189, 248, 0.5)",
        tension: 0.4,
        fill: false,
        pointRadius: 5,
        pointBackgroundColor: "#38BDF8",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#4B5563",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <>
      {/* Trigger Button */}
      <div className="flex text-xs text-gray-600 hover:text-gray-800 cursor-pointer" onClick={() => setIsOpen(true)}>
                <Image
                  aria-hidden
                  src="/icons/stats0.png"
                  alt="stats_icon"
                  width={16}
                  height={16}
                />
                Statistics
              </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)} // Close modal on background click
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Modal Header */}
            <h3 className="text-lg font-bold mb-4 text-center text-gray-800">
              Statistics - Starbucks
            </h3>

            {/* Chart */}
            <div className="h-96">
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticsModal;
