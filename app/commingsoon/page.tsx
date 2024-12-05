import React from 'react'

const ComingSoon: React.FC = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-black-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-6">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="text-3xl font-bold mb-6">
          
        </div>
        <form className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;


