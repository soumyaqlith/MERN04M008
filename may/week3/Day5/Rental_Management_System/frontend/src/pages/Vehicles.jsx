import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Car,
  Bike,
  BadgeIndianRupee,
  Palette,
  CheckCircle2,
  XCircle,
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
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllVehicles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800">
          Available Vehicles
        </h1>

        <p className="text-gray-500 mt-2">
          Choose your perfect ride for your next journey
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : vehicles.length === 0 ? (
        <div className="text-center text-gray-500 text-xl">
          No Vehicles Found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={vehicle.thumbnail}
                  alt={vehicle.name}
                  className="w-full h-56 object-cover"
                />

                <div className="absolute top-4 right-4">
                  {vehicle.isAvailable ? (
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={16} />
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <XCircle size={16} />
                      Not Available
                    </span>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold capitalize text-slate-800">
                    {vehicle.name}
                  </h2>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium uppercase">
                    {vehicle.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-4 text-gray-600">
                  <Bike size={18} />
                  <span className="capitalize">Brand: {vehicle.brand}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <Palette size={18} />
                  <span className="capitalize">Colour: {vehicle.colour}</span>
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-600">
                  <Car size={18} />
                  <span>Number Plate: {vehicle.number_plate}</span>
                </div>

                <p className="text-gray-500 text-sm mt-4 line-clamp-3">
                  {vehicle.about}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-1 text-2xl font-bold text-slate-800">
                    <BadgeIndianRupee size={24} />
                    {vehicle.price_perDay}
                    <span className="text-sm text-gray-500 font-normal">
                      /day
                    </span>
                  </div>

                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-xl font-medium hover:scale-105 transition-all duration-300">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Vehicles;
