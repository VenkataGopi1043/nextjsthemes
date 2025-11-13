import Image from "next/image";

export default function MiddleSection() {
  return (
    <section className="bg-white-200 min-h-screen p-10">
      {/* Dashboard Header */}
      <h1 className="text-xl font-bold text-blue-700 mb-4">Dashboard</h1>

      {/* Bulletin Board Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-700">Bulletin Board</h2>
        <button className="text-blue-600 text-lg font-bold">+</button>
      </div>

      {/* Vertical Cards */}
      <div className="space-y-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Image
            src="/images/profile2.jpg" // add an image in public folder
            alt="Building"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">
              Bluestone lane now overtake stakes!
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Some supporting details about the news can go here.
            </p>
            <div className="flex items-center mt-3">
              <Image
                src="/images/avatar2.jpg" // add a small profile image
                alt="Author"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600 ml-2">
                By Carter James
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md  overflow-hidden">
          <Image
            src="/images/profile3.jpg" // add another image in public folder
            alt="Building"
            width={400}
            height={200}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800">
              Tanishq is now opening at 505 black street
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Another description text for the card.
            </p>
            <div className="flex items-center mt-3">
              <Image
                src="/images/avatar.jpg"
                alt="Author"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600 ml-2">
                By Simon Joseph
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}