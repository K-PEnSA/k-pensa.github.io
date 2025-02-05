// MaintenancePage.tsx

import React from "react";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          We're Currently Under Maintenance
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Our website is currently undergoing scheduled maintenance. Please
          check back later.
        </p>
        <div className="mb-4">
          <svg
            className="animate-spin h-10 w-10 text-red-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6l4 4"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-500">
          We'll be back shortly. Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
