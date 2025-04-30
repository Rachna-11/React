import React from 'react';
import locationIcon from '../Assets/location.svg';
import squre from '../Assets/arrow.svg'
import bad from '../Assets/bad.svg'
import bath from '../Assets/bath.svg'
import car from '../Assets/car.svg'

const properties = [
  {
    type: 'Rent',
    price: '$ 400 / month',
    title: 'Sunset luxury villa',
    address: '12273 Dream Avenue, New York',
    sqft: '1490 sqft',
    beds: 3,
    baths: 2,
    garages: 2,
    image: 'src/Assets/villa-1.webp',
  },
  {
    type: 'Sell',
    price: '$ 50,000',
    title: 'Parkview estates',
    address: '2972 Westheimer Rd. Santa Ana, Illinois',
    sqft: '2370 sqft',
    beds: 4,
    baths: 3,
    garages: 2,
    image: 'src/Assets/villa-2.webp',
  },
  {
    type: 'Rent',
    price: '$ 200 / month',
    title: 'Cedar grove residences',
    address: '8502 Preston Rd. Inglewood, Maine',
    sqft: '1300 sqft',
    beds: 3,
    baths: 3,
    garages: 1,
    image: 'src/Assets/villa-3.webp',
  },
  {
    type: 'Sell',
    price: '$ 32,000',
    title: 'Lakeside manor',
    address: '2464 Royal Ln. Mesa, New Jersey',
    sqft: '700 sqft',
    beds: 2,
    baths: 1,
    garages: 1,
    image: 'src/Assets/villa-4.webp',
  },
  {
    type: 'Rent',
    price: '$ 520 / month',
    title: 'Oceanfront oasis',
    address: '6391 Elgin St. Celina, Delaware',
    sqft: '1500 sqft',
    beds: 3,
    baths: 3,
    garages: 2,
    image: 'src/Assets/villa-5.webp',
  },
  {
    type: 'Rent',
    price: '$ 360 / month',
    title: 'Skyline tower',
    address: '2715 Ash Dr. San Jose, South Dakota',
    sqft: '1250 sqft',
    beds: 2,
    baths: 3,
    garages: 1,
    image: 'src/Assets/villa-6.webp',
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-6 max-w-screen-xl mx-auto mt-[120px]">
      <div className="flex justify-center mb-3">
        <span className="text-xs px-4 py-1 border rounded-full bg-gray-100">RECENT PROPERTIES</span>
      </div>
      <h2 className="text-4xl font-bold text-center mb-12">Featured properties</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div key={index} className="rounded-3xl w-[95%] shadow-sm border overflow-hidden bg-white">
            <div className="relative overflow-hidden">

              <img src={property.image} alt={property.title} className="w-full h-[300px] object-cover  transform transition-transform duration-300 hover:scale-105" />
              <span className="absolute top-3 left-3 text-xs bg-white px-3 py-1 rounded-full font-semibold shadow">
                {property.type}
              </span>
              <span className="absolute top-3 right-3 text-xs bg-black text-white px-3 py-1 rounded-full font-semibold shadow">
                {property.price}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{property.title}</h3>

              <p className="text-sm text-gray-500 mb-4 flex items-center">
                <img src={locationIcon} alt="location" className="w-4 h-4 mr-2" />
                {property.address}
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <i className="fas fa-vector-square"></i>
                <img src={squre} className='w-4 h-4 ' />{property.sqft}
                </div>

                <div className="flex items-center gap-1"><i className="fas fa-bed"></i>
                <img src={bad} className='w-4 h-4 ' />
                {property.beds}</div>

                <div className="flex items-center gap-1"><i className="fas fa-bath"></i>
                <img src={bath} className='w-4 h-4 ' />
                {property.baths}</div>

                <div className="flex items-center gap-1"><i className="fas fa-car"></i>
                <img src={car} className='w-4 h-4 ' />
                {property.garages}</div>

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-black text-white px-8 py-2 rounded-2xl hover:bg-gray-800">Explore all</button>
      </div>
    </section>
  );
};

export default Blog;
