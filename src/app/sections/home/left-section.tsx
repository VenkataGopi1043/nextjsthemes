import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function LeftSection() {
  return (
    <div className="flex flex-col flex-shrink-0 bg-white  shadow-lg p-10">
      <div className="w-full flex flex-col items-center mb-4 ">
        {/* Google Icon Box */}
        <div className="w-10 h-full bg-white rounded-lg flex items-center justify-center mb-6">
          <FcGoogle size={35} />
        </div>

        {/* User Profile Image */}
        <div className="mb-2">
          <Image
            className="rounded-lg "
            src="/images/menimage.jpg"
            alt="User Profile"
            width={40} // Adjusted size to match typical profile image size
            height={40}
          />
        </div>

        <p className="text-gray-800 text-sm font-semibold cursor-pointer hover:text-blue:800 mb-6">
          Hello, JuJulie
        </p>
      </div>

      <div className="flex flex-col">
        <ul className="space-y-2">
          <li>
            <a className="flex items-center gap-3 px-3 py-2 text-blue-700 mb-6 text-blue font-semibold  relative">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-700 rounded-l-md"></span>
              Dashboard
            </a>
          </li>

          <li>
            <a className="flex items-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600">
              Calender
            </a>
          </li>
          <li>
            <a className="flex items-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600 ">
              Tickets
            </a>
          </li>
          <li>
            <a className="flex itmes-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600">
              Contants
            </a>
          </li>
          <li>
            <a className="flex items-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600">
              Tools
            </a>
          </li>
          <li>
            <a className="flex items-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600">
              Seetings
            </a>
          </li>
          <li>
            <a className="Flex items-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600">
              Time
            </a>
            <a className="flex items-centre gap-3 px-3 py-2  text-gray-300 rounded-lg cursor-pointer hover:text-blue-600">
              ListView
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
