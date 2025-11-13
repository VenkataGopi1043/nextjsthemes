import { FcGoogle } from "react-icons/fc"; // You mentioned keeping the Google icon, but Image 2 shows a different one. I'll keep FcGoogle for now.
import Image from "next/image"; // Example for the top menu icon, you can replace with your actual icon

export default function LeftSection() {
  return (
    // Main sidebar container. Adjusted padding and removed fixed width for better responsiveness.
    <div className="flex flex-col flex-shrink-0 bg-white shadow-lg p-10">
      
     

      {/* Container for Google Icon and User Profile Image */}
      {/* Centering these two elements horizontally within their available space */}
      <div className="w-full flex flex-col items-center mb-4 "> {/* Increased mb-8 for more space below */}
        
        {/* Google Icon Box */}
        <div className="w-10 h-10  bg-white rounded-lg flex items-center justify-center mb-4"> {/* Increased mb-4 */}
          <FcGoogle size={30} />
        </div>
        
        {/* User Profile Image */}
        <div className="mb-4"> {/* Added mb-2 for spacing between image and text */}
          <Image 
              className="rounded-full border-2 border-blue-500 object-cover shadow-md " // Changed to rounded-full for circular image
              src="/images/profile.jpg" // Ensure this path is correct for your image
              alt="User Profile"
              width={40} // Adjusted size to match typical profile image size
              height={40}
          />
        </div>
        
        {/* "Hello, Jujulie" text */}
        <p className="text-gray-700 text-sm font-semibold mb-8">Hello, Jujulie</p> {/* Increased mb-8 for space before menu */}
      </div>
      
      {/* Dashboard Menu / Navigation List */}
      <div className="flex flex-col"> {/* Using flex-col to stack items */}
        {/* Dashboard Menu Title - Removed if not needed per Image 2 */}
        {/* <p className="space-y-2 text-sm text-gray-800 font-semibold mb-2 pl-3">Dashboard Menu</p> */}
        
        <ul className="space-y-2">
          {/* Dashboard Item with blue indicator */}
          <li>
            <a className="flex items-center gap-3 px-3 py-2 text-blue-700  text-bule font-semibold  relative">
                {/* Blue indicator on the left */}
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-blue-700 rounded-l-md"></span>
                Dashboard
            </a>
          </li>
          
          {/* Other Menu Items (no blue indicator) */}
          <li>
            <a className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-gray-100 rounded-lg ">
                Tickets
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                Contacts
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                Tools
            </a>
          </li>
          <li>
            <a className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:text-blue-600 hover:bg-gray-100 rounded-lg">
                Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}