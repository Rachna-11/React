import React from 'react';
import aboutImg from '../Assets/about.webp'; 

const AboutUs = () => {
  return (
    <section className="py-20 px-6 max-w-screen-xl mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-12">
        
        <div>
          <span className="text-xs px-4 py-1 border rounded-full bg-gray-100 inline-block mb-4">ABOUT US</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The ideal way to find <br /> your dream home
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Wake up to the sound of waves and the smell of salt air in one of our stunning coastal homes. Perfect for those seeking a serene escape, these properties offer unmatched ocean views and direct beach safe neighborhoods, and nearby schools access.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Read more
          </button>
        </div>

        <div>
          <img
            src={aboutImg}
            alt="About Us"
            className="w-[90%] h-[450px] rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
