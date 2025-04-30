import React, { useEffect, useRef } from "react";

const agents = [
  {
    name: "Uziel Renta",
    image: "src/Assets/agents-1 (1).webp",
    discription: "Property management specialist",
  },
  {
    name: "Valerie Ahorro",
    image: "src/Assets/agents-1 (2).webp",
    discription: "Listing agent",
  },
  {
    name: "Maestra Yazmin",
    image: "src/Assets/agents-1 (3).webp",
    discription: "Investment property consultant",
  },
  {
    name: "Bryce Jones",
    image: "src/Assets/agents-1 (4).webp",
    discription: "Client relations manager",
  },
  {
    name: "Dentista Aguilda",
    image: "src/Assets/agents-1 (5).webp",
    discription: "Luxury property expert",
  },
  {
    name: "Agustín trabajo",
    image: "src/Assets/agents-1 (6).webp",
    discription: "Lead property advisor",
  },
  {
    name: "Cristela Estilista",
    image: "src/Assets/agents-1 (7).webp",
    discription: "Senior real estate consultant",
  },
  {
    name: "Denya Contadora",
    image: "src/Assets/agents-1 (8).webp",
    discription: "Real estate investment specialist",
  },
  {
    name: "Alday Banamex",
    image: "src/Assets/agents-1 (9).webp",
    discription: "Residential sales consultant",
  },
  {
    name: "Encarna Homie",
    image: "src/Assets/agents-1 (10).webp",
    discription: "Commercial property agent",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const scrollSpeed = 1.5;
    let animationId;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += scrollSpeed;

        const totalScroll = slider.scrollWidth / 2;
        if (slider.scrollLeft >= totalScroll) {
          slider.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const allAgents = [...agents, ...agents];

  return (
    <div className="px-6 py-16 bg-white">
      <div className="text-center mb-10">
        <span className="inline-block mb-2 px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          OUR AGENTS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our expert agents
        </h2>
      </div>

      <div
        className="overflow-x-auto whitespace-nowrap no-scrollbar"
        ref={sliderRef}
      >
        <div className="flex space-x-6 ">
          {allAgents.map((agent, index) => (
            <div
              key={index}
              className="flex-shrink-0  rounded-2xl overflow-hidden shadow-lg bg-white"
            >
           <div className="overflow-hidden">
        <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-96 object-cover transition-transform duration-300 hover:scale-110"
         />
        </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {agent.name}
                </h3>
                <h4 className="text-[15px] text-gray-500">
                  {agent.discription}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
