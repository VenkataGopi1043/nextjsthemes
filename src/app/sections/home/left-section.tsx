export default function LeftSection() {
  return (
    <div className="w-1/6 bg-blue-100 shadow-lg flex flex-col p-4">
      {/* Square Box */}
      <div className="w-10 h-10 bg-blue-300 rounded-lg flex items-center justify-center mb-6 shadow-lg">
        <span className="text-xl font-bold text-white"></span>
      </div>
      <div className="flex">image</div>

      {/* Dashboard Menu */}
      <ul className="space-y-2">
        <li className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:shadow-md cursor-pointer rounded-lg text-green-800 font-semibold">
          Dashboard
        </li>
        <li className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:shadow-md cursor-pointer rounded-lg">
          Tickets
        </li>
        <li className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:shadow-md cursor-pointer rounded-lg">
          Contacts
        </li>
        <li className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:shadow-md cursor-pointer rounded-lg">
          Tools
        </li>
        <li className="flex items-center gap-3 px-3 py-2 hover:bg-white hover:shadow-md cursor-pointer rounded-lg">
          Settings
        </li>
      </ul>
    </div>
  );
}
