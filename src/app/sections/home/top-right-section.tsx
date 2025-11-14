import { FaSearch, FaHome } from "react-icons/fa";

export default function TopRightSection() {
  return (
    <div className="p-20 ">
      {/* Header Section */}
      <div className="flex items-center justify-between bg-bule-300 p-2  rounded">
        <span className="text-lg font-semibold cursor-pointer hover:text-blue-600">
          Shift Mointer
        </span>
        <div className="flex space-x-3">
          <FaSearch className="text-xl  text-blue-600" />
          <FaHome className="text-xl text-blue-600" />
        </div>
      </div>

      {/* Status Section */}
      <div className=" bg-white-400 p-1 rounded">
        <button className="bg-white px-4 py-2 cursor-pointer hover:text-blue-700 rounded shadow text-sm font-medium border border-gray-200 ">
          Pending
        </button>
      </div>

      {/* View Section */}
      <div className="flex justify-end bg-white-500 p-1 rounded">
        <button className="bg-white px-4 py-2  text-blue-500 rounded shadow text-sm font-medium border border-gray-200 cursor-pointer hover:text-red-500">
          Listview
        </button>
      </div>
    </div>
  );
}
