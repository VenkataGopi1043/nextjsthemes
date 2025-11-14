import React from "react";

export default function BottomRightSection() {
  return (
    <div className="flex flex-col gap-4 p-4 w-full h-50">
      {/* Top Info Row: Travel Time & Weather (Plain Text) */}
      <div className="flex justify-between w-full">
        <div className="text-sm text-gray-800 p-4">
          <p className="font-semibold ">travel Time</p>
        </div>
        <div className="text-sm text-gray-800 text-right mr-90 ">
          <p className="font-semibold text-black-800  p-4">Todays Weather</p>
        </div>
      </div>

      {/* Middle Row: Vehicle Icons & Pending Button */}
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-4">
          <span className="text-gray-700 text-xl">🚗</span>
          <span className="text-gray-700 text-xl">🚌</span>
          <span className="text-gray-700 text-xl">🚴‍♂️</span>
          <span className="text-gray-700 text-xl">🚶‍♂️</span>
        </div>
        <button className="bg-white px-4 py-2 mr-100 rounded shadow text-sm font-medium border border-gray-300  cursor-pointer hover:text-blue-600">
          Pending
        </button>
      </div>

      {/* Bottom Section – Two Horizontal Cards */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Travel Time Card */}
        <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-lg p-2  shadow-sm hover:shadow-md transition">
          <div className="w-50 h-50 mr-6  flex items-center justify-center">
            {/* Replace with your actual clock icon or image */}
            <img
              src="/images/clock.png"
              alt="Clock Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-xl font-semibold  text-gray-500">Leave By</p>
            <p className="text-xl font-semibold text-gray-1000">07:34 AM</p>
            <p className="text-xs text-gray-400">Estimated Time to Exit</p>
          </div>
        </div>

        {/* Weather Card */}
        <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <div className="w-50 h-50 mr-4 flex items-center justify-center">
            {/* Replace with your actual sun/cloud icon or image */}
            <img
              src="/images/cloudy.png "
              alt="Weather Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-xl font-semibold  text-gray-500">Pretty Sunny</p>

            <p className="text-xl font-semibold text-black-800">27°C</p>
            <p className="text-xs text-gray-400">Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
}
