import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  Car,
  Bike,
  BadgeIndianRupee,
  CheckCircle2,
  XCircle,
  ArrowRight,
  IndianRupee,
} from "lucide-react";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllVehicles = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/vehicle/all-vehicle`,
      );

      setVehicles(res.data?.vehicles || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllVehicles();
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      {/* TOP SECTION */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* HEADING */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Premium Rental Service
              </p>

              <h1 className="text-5xl font-black text-gray-900 mt-3 leading-tight">
                Drive Your <br /> Dream Vehicle
              </h1>

              <p className="text-gray-500 mt-5 max-w-lg leading-7">
                Explore premium cars and bikes for city rides, road trips, and
                daily travel with affordable pricing.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:bg-gray-800 transition-all">
                  Explore Vehicles
                </button>

                <button className="border border-gray-300 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-5 w-full max-w-md">
              <div className="bg-black text-white rounded-3xl p-6">
                <h2 className="text-4xl font-bold">{vehicles.length}+</h2>

                <p className="text-gray-300 mt-2">Vehicles Available</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h2 className="text-4xl font-bold text-gray-900">24/7</h2>

                <p className="text-gray-500 mt-2">Customer Support</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
                <h2 className="text-4xl font-bold text-gray-900">4.9</h2>

                <p className="text-gray-500 mt-2">Customer Rating</p>
              </div>

              <div className="bg-yellow-400 rounded-3xl p-6">
                <h2 className="text-4xl font-black text-black">Fast</h2>

                <p className="text-black/70 mt-2">Booking Process</p>
              </div>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-3xl p-4 mt-12 flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center bg-gray-100 rounded-2xl px-4">
              <Search size={20} className="text-gray-500" />

              <input
                type="text"
                placeholder="Search by vehicle name..."
                className="w-full bg-transparent outline-none px-3 py-4"
              />
            </div>

            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all">
              Search Now
            </button>
          </div>
        </div>
      </div>

      {/* VEHICLES */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              Featured Vehicles
            </h2>

            <p className="text-gray-500 mt-2">
              Choose your favorite vehicle and start your journey
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-sm font-semibold bg-white border border-gray-200 px-5 py-3 rounded-2xl hover:shadow-md transition-all">
            View All
            <ArrowRight size={18} />
          </button>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="w-14 h-14 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : vehicles.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow-sm">
            <p className="text-gray-500 text-lg">No Vehicles Found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle._id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={vehicle.thumbnail}
                    alt={vehicle.name}
                    className="w-full h-44 object-cover"
                  />

                  {/* TYPE */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wide">
                      {vehicle.type}
                    </span>
                  </div>

                  {/* STATUS */}
                  <div className="absolute top-3 right-3">
                    {vehicle.isAvailable ? (
                      <div className="bg-green-500 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        Available
                      </div>
                    ) : (
                      <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
                        <XCircle size={12} />
                        Booked
                      </div>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  {/* TITLE */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 capitalize">
                        {vehicle.name}
                      </h2>

                      <p className="text-xs text-gray-500 capitalize mt-1">
                        {vehicle.brand}
                      </p>
                    </div>

                    <div className="bg-gray-100 p-2 rounded-xl">
                      {vehicle.category === "bike" ||
                      vehicle.category === "EV" ? (
                        <Bike size={18} className="text-black" />
                      ) : (
                        <Car size={18} className="text-black" />
                      )}
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-gray-50 rounded-xl p-2">
                      <p className="text-[10px] text-gray-400">Plate</p>

                      <p className="text-sm font-semibold text-gray-700">
                        {vehicle.number_plate}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-2">
                      <p className="text-[10px] text-gray-400">Colour</p>

                      <p className="text-sm font-semibold text-gray-700 capitalize">
                        {vehicle.colour}
                      </p>
                    </div>
                  </div>

                  {/* ABOUT */}
                  <p className="text-xs text-gray-500 mt-4 line-clamp-2 leading-5">
                    {vehicle.about}
                  </p>

                  {/* FOOTER */}
                  <div className="flex justify-between items-center mt-5">
                    <div>
                      <div className="flex items-center text-2xl font-bold text-black">
                        <IndianRupee size={20} />
                        {vehicle.price_perDay}
                      </div>

                      <p className="text-[11px] text-gray-400">Per Day</p>
                    </div>

                    <button className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-xl font-medium transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Vehicles;
