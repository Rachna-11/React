import React from 'react';

const categories = [
  {
    title: 'Eco-Friendly Homes',
    description: 'Sustainable living in eco-friendly homes equipped with cutting-edge green technologies.',
    image: 'src/Assets/property-1.webp', 
  },
  {
    title: 'Commercial Properties',
    description: 'Commercial buildings intended to provide visitors with comfort and convenience.',
    image: 'src/Assets/property-2.webp',
  },
  {
    title: 'Luxury Properties',
    description: 'Elegant life in opulent mansions and estates equipped with the best conveniences.',
    image: 'src/Assets/property-3.webp',
  },
];

const Property = () => {
  return (
    <section className="py-20 px-6 max-w-screen-xl mx-auto text-center">
      <span className="text-xs px-4 py-1 border rounded-full bg-gray-100 inline-block mb-4">PROPERTY CATEGORIES</span>
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Start your journey to<br />your ideal property</h2>

      <div className="grid md:grid-cols-3 gap-8 text-left overflow-hidden">
        {categories.map((category, index) => (
          <div key={index} className="bg-white w-[90%] rounded-3xl overflow-hidden shadow-sm">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover overflow-hidden rounded-3xl transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4 text-[14px]">{category.description}</p>
              <button className="border border-black text-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    


  );
};

export default Property;
