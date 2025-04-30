import React from "react";

function House() {
  return (
    <div className="bg-white px-6 md:px-20 py-16">
      <div className="text-center mb-20">
        <span className="inline-block mb-2 px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          OUR PROCESS
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Find your dream house & <br /> follow our process
        </h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="space-y-48 pl-[80px] pr-[30px]">
          <div className="space-y-4 w-[80%]">
            <span className="text-sm font-medium text-gray-400 broder rounded-[20px] bg-[#F7F7F7] py-2 px-4">STEP 1</span>
            <h2 className="text-3xl font-bold text-gray-900">
              Look for your dream home in your local area today
            </h2>
            <p className="text-gray-600">
            Explore a carefully curated selection of stunning homes near you that perfectly match your unique lifestyle, preferences, and specific needs, offering the ideal balance of comfort, style, luxury, and location. Each property is handpicked to provide the perfect combination.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-medium text-gray-400 broder rounded-[20px] bg-[#F7F7F7] py-2 px-4">STEP 2</span>
            <h2 className="text-3xl font-bold text-gray-900">
              Schedule a meeting with one of our agents
            </h2>
            <p className="text-gray-600">
            Book a personalized meeting with one of our experienced agents to thoroughly explore all your options, discuss your needs, and find the perfect property that fits your lifestyle and budget.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-medium text-gray-400 broder rounded-[20px] bg-[#F7F7F7] py-2 px-4">STEP 3</span>
            <h2 className="text-3xl font-bold text-gray-900">
              A month or less, get your ideal home
            </h2>
            <p className="text-gray-600">
            Secure your dream home in a month or less with our expert assistance, personalized guidance, and streamlined processes, ensuring a smooth, stress-free, and successful journey tailored specifically to your needs and preferences from start to finish.
            </p>
          </div>
        </div>

        <div className="sticky top-28 h-[400px]">
          <div className="rounded-3xl overflow-hidden shadow-xl w-[90%] h-full ml-[20px]">
            <img
              src="src/Assets/dream_house.webp"
              alt="Modern House"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;
