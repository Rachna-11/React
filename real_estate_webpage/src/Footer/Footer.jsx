import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center ml-[30px]">
        <div className="w-full md:w-1/2 space-y-6">
          <button className="bg-white text-black px-4 py-1 rounded-full uppercase text-sm">
            Contact
          </button>
          <h2 className="text-4xl font-bold">Want to contact<br />with us?</h2>
          <input
            type="text"
            placeholder="Name"
            className="bg-black border-b border-gray-500 w-full py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-black border-b border-gray-500 w-full py-2 focus:outline-none"
          />
          <button className="bg-white text-black px-6 py-2 rounded-md">
            Book a call
          </button>
        </div>
        <div className=" md:w-1/2 mt-10 md:mt-0 w-[50%]">
          <img
            src="src/Assets/footer.webp" 
            alt="Modern House"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-sm ml-[70px]">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold">Realfy</h3>
            <p className="mt-2 text-gray-400">Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum.</p>
            <button className="mt-4 border border-white px-4 py-2 rounded-md">
              View More Templates
            </button>
          </div>

          {/* Links */}
          {[
            ['Pages', ['Home', 'About', 'Services', 'Contact', 'Realtor', 'Privacy Policy']],
            ['CMS', ['Properties', 'Properties Single', 'Blog', 'Blog Single', 'Agents', 'Agents Single']],
            ['Utility', ['Style guide', '404 Page', 'Password protected', 'Licenses', 'Changelog', 'Terms & conditions']],
            ['Social', ['Facebook', 'Instagram', 'Twitter', 'Linkedin', 'YouTube', 'Threads']],
          ].map(([title, links], index) => (
            <div key={index}>
              <h4 className="font-semibold mb-2">{title}</h4>
              <ul className="space-y-4 text-white">
                {links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-10 text-xs">©Realfy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
