import React from "react";
export default function MiddleRightSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2    gap-6 ">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md h-50 border border-gray-200  p-4 ">
        {/* Top row: badges + avatar in center */}
        <div className="flex items-center justify-between  relative">
          <span className="bg-green-100 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
            Active
          </span>

          {/* avatar exactly in middle */}
          <img
            src="https://i.pravatar.cc/70?img=12"
            alt="Matt Henry"
            className="w-15 h-15 rounded-full absolute left-1/2 -translate-x-1/2 -top-3 border-4 border-white shadow"
          />

          <span className="bg-purple-200 text-purple-400 text-xs font-medium px-3 py-1 rounded-full">
            Author
          </span>
        </div>

        {/* Middle row: Name + Role */}
        <div className="flex flex-col items-center mt-6 mb-4">
          <h2 className="text-lg font-semibold">Matt henry</h2>
          <p className="text-sm text-gray-600">Team Member</p>
        </div>

        {/* Bottom row: phone left, time right */}
        <div className="flex justify-between text-sm text-gray-700">
          <p>📱 (+01) 9855-000-44</p>
          <p>🕒 06:00 PM - 10:00 PM</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className=" bg-white rounded-lg shadow-md h-50 border border-gray-200 p-4">
        {/* Top row: badges + avatar in center */}
        <div className="flex items-centre justify-between relative">
          <span className="bg-orange-200 text-white-400 text-xs font-medium px-3 py-1 rounded-full">
            Active
          </span>
          {/* avatar exactly in middle */}
          <img
            src="https://i.pravatar.cc/70?img=47"
            alt="Alex Perry"
            className="w-15 h-15 rounded-full absolute left-1/2 -translate-x-1/2  -top-3 border-4 border-white shadow"
          />

          <span className=" bg-purple-200 text-purple-500 text-xs font-medium px-3 py-1 rounded-full">
            Author
          </span>
        </div>

        {/* middle row: Name + Role */}
        <div className=" flex flex-col items-center mt-6 mb-4">
          <h2 className="text-lg font-semibold">Alex Perry</h2>
          <p className="text-sm text-gray-600">Team Member</p>
        </div>

        {/* Bottom Row: phone left, Time Right*/}
        <div className="flex justify-between text-sm text-gray-700">
          <p> 📱 (+01) 985-000-55</p>
          <p> 🕒 06:00 pm - 10:00 pm</p>
        </div>
      </div>
    </div>
  );
}
