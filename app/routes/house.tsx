import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import type { Route } from "./+types/house"; // Ensure this file exists!

export function Welcome() {
  return <h1>Welcome to the House Page</h1>;
}

export default function House() {
  const [propertyType, setPropertyType] = useState("All Type");
  const [neighborhood, setNeighborhood] = useState("Neighborhood");

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/house.jpg')" }}>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-transparent text-white">
        <div className="text-xl font-bold">MINIMUM LIVING COST</div>
        <div className="space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Landlord</a>
          <a href="#" className="hover:underline">Tenants</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-start p-16 text-white max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight">
          The Most Affordable Place To Stay In The San Francisco Bay Area
        </h1>
      </div>

      {/* Map and Search Bar */}
      <div className="absolute right-10 bottom-10 bg-white p-4 rounded-xl shadow-lg">
        <img src="/maplocations.jpg" alt="Map" className="rounded-md mb-4 w-80" />
        <div className="flex space-x-2">
          <select
            className="border p-2 rounded-md"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option>All Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Condo</option>
          </select>
          <select
            className="border p-2 rounded-md"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          >
            <option>Neighborhood</option>
            <option>Downtown</option>
            <option>Suburbs</option>
            <option>Bay Area</option>
          </select>
          <button className="bg-blue-500 text-white p-2 rounded-md">
            <FaSearch />
          </button>
        </div>
      </div>

    </div>
  );
}
