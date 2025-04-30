import React from "react";

export default function RealEstateHighlight() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 md:px-20 py-10 space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ml-[130px] mr-[80px] w-full">
                <div className="rounded-3xl overflow-hidden shadow-lg w-[80%] h-[400px]">
                    <img
                        src="src/Assets/highlight.webp"
                        alt="Modern house"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="space-y-6">
                    <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        WHY CHOOSE US
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Why we are best in <br /> Real-Estate market?
                    </h1>
                    <p className="text-gray-600 text-lg">
                        With our unmatched expertise, personalized service, and deep knowledge of the real estate market, we make your home buying or selling experience seamless and stress-free. Our dedicated team of professionals listens to your needs, provides tailored.
                    </p>
                    <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300">
                        Contact us
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start ml-[130px] mr-[70px] w-full">
    
                <div className="sticky top-20 self-start">
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            SOME NUMBERS
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            The numbers behind <br /> our success
                        </h1>
                        <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300">
                            Contact us
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mr-[90px]">
                    {[
                        { title: "200+", label: "Properties", desc: "Discover the key figures that highlight our impact in the real estate market. From satisfied clients to successful transactions" },
                        { title: "300+", label: "Satisfied Users", desc: "Take a closer look at the statistics that reflect our growth, success, and dedication to helping clients achieve their real estate goals." },
                        { title: "100%", label: "Happy Clients", desc: "From closed deals to client satisfaction ratings, our numbers showcase the impact we’ve made in the real estate industry" },
                        { title: "900K", label: "Follower", desc: "Explore the numbers behind our real estate success, showcasing the trust clients place in us and the results we consistently deliver." }
                    ].map((item, index) => (
                        <div key={index} className="bg-[#c6c2c241] p-6 rounded-2xl shadow-sm h-[250px] w-full">
                            <h2 className="text-3xl font-bold text-gray-900">{item.title}</h2>
                            <p className="text-gray-800 font-medium mt-1">{item.label}</p>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
