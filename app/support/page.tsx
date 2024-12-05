import React from "react";

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          SUPPORT
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Need help? Fill out the form below or reach out to us directly. We&apos;re
          here to assist you!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Describe your issue or question"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-200"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-400 text-white font-bold rounded-lg text-lg hover:bg-blue-600 transition duration-300"
          >
            SUBMIT
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Contact Us Directly
          </h2>
          <p className="text-gray-700">
            Email:
            <span
              className="text-blue-400 hover:underline"
            >
              support@Googlereview.com
            </span>
          </p>
          <p className="text-gray-700">
            Phone:
            <span
              className="text-blue-400 hover:underline"
            >
              +1 (234) 567-890
            </span>
          </p>
          <p className="text-gray-700">Available: Monday - Friday, 9 AM - 5 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
