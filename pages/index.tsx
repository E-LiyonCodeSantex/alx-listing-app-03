import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Filter from "@/components/common/filter";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = activeFilter === "All"
    ? PROPERTYLISTINGSAMPLE
    : PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      );

  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Welcome | ALX airbnb cloning app</title>
        <meta name="description" content="Discover awesome stuff here" />
      </Head>

      {/* Hero Banner Section */}
      <div className="relative w-full h-[30vh] xs:h-[50vh] z-10">
        <Image
          src="/assets/images/Image 1.png"
          alt="logo"
          fill
          className="pt-0 xs:pt-4 pb-4 xs:pb-0 px-4 rounded-3xl object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-sm font-bold mb-2 xs:text-2xl">
            Find your favorite place here!
          </h2>
          <p className="text-xs xs:text-lg">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="px-4 pt-4">
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      {/* Listings Section */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProperties.map((property, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={property.image}
                alt={property.name}
                className="rounded-lg h-[200px] w-full object-cover mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
              <p className="text-gray-600 text-sm">
                {property.address.city}, {property.address.country}
              </p>
              <p className="text-emerald-500 font-medium mt-2">
                ${property.price} / night
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Rating: {property.rating}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-[10px] w-full p-2">
           <button
            className="bg-black text-white px-2 py-1 rounded-3xl text-xs sm:text-xs w-[70px] text-center whitespace-nowrap overflow-hidden shrink-0"
          >
            More Info
          </button>
          <p>Click to see more listings</p>
      </div>
    </div>
  );
}
