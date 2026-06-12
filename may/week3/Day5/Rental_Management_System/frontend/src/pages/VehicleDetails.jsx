import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Car, Fuel, Tag, Palette, CircleCheck } from "lucide-react";
import BookingModal from "../components/modals/BookingModal";

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const getVehicleById = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/vehicle/by-id/${id}`,
      );

      if (res.data.success) {
        setVehicle(res.data.vehicle);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load vehicle");
    }
  };

  useEffect(() => {
    getVehicleById();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          {/* Vehicle Image */}
          <div className="h-[400px] bg-zinc-800">
            <img
              src={vehicle.thumbnail}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{vehicle.name}</h1>

                <p className="text-zinc-400 text-lg">{vehicle.brand}</p>

                <div className="mt-4">
                  {vehicle.isAvailable ? (
                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold">
                      Not Available
                    </span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <p className="text-zinc-400">Rent Per Day</p>

                <h2 className="text-5xl font-bold text-white">
                  ₹{vehicle.price_perDay}
                </h2>

                <p className="text-zinc-500">/ day</p>
              </div>
            </div>

            {/* Vehicle Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <div className="bg-zinc-800 rounded-2xl p-5">
                <Car className="text-2xl mb-3 text-white" />
                <p className="text-zinc-400 text-sm">Category</p>
                <h3 className="font-semibold">{vehicle.category}</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-5">
                <Fuel className="text-2xl mb-3 text-white" />
                <p className="text-zinc-400 text-sm">Fuel Type</p>
                <h3 className="font-semibold">{vehicle.type}</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-5">
                <Palette className="text-2xl mb-3 text-white" />
                <p className="text-zinc-400 text-sm">Color</p>
                <h3 className="font-semibold">{vehicle.colour}</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-5">
                <Tag className="text-2xl mb-3 text-white" />
                <p className="text-zinc-400 text-sm">Number Plate</p>
                <h3 className="font-semibold">{vehicle.number_plate}</h3>
              </div>
            </div>

            {/* About Vehicle */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4">About Vehicle</h2>

              <div className="bg-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-300 leading-8">{vehicle.about}</p>
              </div>
            </div>

            {/* Extra Details */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-400">Brand</p>
                <h3 className="font-semibold text-xl">{vehicle.brand}</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-400">Availability</p>

                <div className="flex items-center gap-2 mt-2">
                  <CircleCheck className="text-green-400" />
                  <span>
                    {vehicle.isAvailable
                      ? "Ready for Rent"
                      : "Currently Unavailable"}
                  </span>
                </div>
              </div>
            </div>

            {/* Rent Button */}
            <div className="mt-12">
              <button
                onClick={() => setOpenModal(true)}
                className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all duration-300"
              >
                Rent This Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <BookingModal
        vehicleId={id}
        closeModal={()=>setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default VehicleDetails;
