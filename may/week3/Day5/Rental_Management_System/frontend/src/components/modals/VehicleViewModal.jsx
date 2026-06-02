import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Car,
  Fuel,
  IndianRupee,
  Palette,
  Calendar,
  ShieldCheck,
  BadgeInfo,
  Tag,
  CheckCircle,
  XCircle,
} from "lucide-react";

const VehicleViewModal = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] overflow-y-auto"
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Vehicle Details</h2>

                <p className="text-gray-300 mt-1">
                  Complete vehicle overview and rental information
                </p>
              </div>

              <button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* HERO SECTION */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={vehicle.thumbnail}
                  alt={vehicle.name}
                  className="w-full h-[320px] object-cover rounded-3xl shadow-lg"
                />

                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
                      vehicle.isAvailable
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {vehicle.isAvailable
                      ? "Available Now"
                      : "Currently Unavailable"}
                  </span>
                </div>
              </div>

              {/* DETAILS */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
                    {vehicle.category}
                  </span>

                  <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm">
                    {vehicle.type}
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900">
                  {vehicle.name}
                </h1>

                <p className="text-gray-500 text-lg mt-2">{vehicle.brand}</p>

                <div className="mt-6">
                  <div className="text-4xl font-bold text-green-600">
                    ₹{vehicle.price_perDay}
                  </div>

                  <p className="text-gray-500">Per Day Rental Charge</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="bg-gray-100 px-4 py-2 rounded-xl">
                    Plate: {vehicle.number_plate}
                  </div>

                  <div className="bg-gray-100 px-4 py-2 rounded-xl">
                    Color: {vehicle.colour}
                  </div>
                </div>
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="grid md:grid-cols-4 gap-5 mb-10">
              <div className="bg-gray-50 shadow-md rounded-2xl p-4">
                <Car className="text-black mb-3" />
                <h4 className="text-gray-500 text-sm">Category</h4>
                <p className="font-bold text-lg capitalize">
                  {vehicle.category}
                </p>
              </div>

              <div className="bg-gray-50  shadow-md rounded-2xl p-4">
                <Fuel className="text-black mb-3" />
                <h4 className="text-gray-500 text-sm">Fuel Type</h4>
                <p className="font-bold text-lg capitalize">{vehicle.type}</p>
              </div>

              <div className="bg-gray-50 shadow-md rounded-2xl p-4">
                <Palette className="text-black mb-3" />
                <h4 className="text-gray-500 text-sm">Colour</h4>
                <p className="font-bold text-lg">{vehicle.colour}</p>
              </div>

              <div className="bg-gray-50 shadow-md rounded-2xl p-4">
                <IndianRupee className="text-black mb-3" />
                <h4 className="text-gray-500 text-sm">Daily Price</h4>
                <p className="font-bold text-lg">₹{vehicle.price_perDay}</p>
              </div>
            </div>

            {/* INFORMATION SECTION */}
            <div className="grid lg:grid-cols-2 gap-4">
              {/* LEFT */}
              <div className="bg-gray-50 shadow-md rounded-3xl p-4">
                <div className="flex items-center gap-2 mb-5">
                  <BadgeInfo size={20} />
                  <h3 className="text-xl font-bold">Vehicle Information</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Vehicle Name</span>

                    <span className="font-semibold">{vehicle.name}</span>
                  </div>

                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Brand</span>

                    <span className="font-semibold">{vehicle.brand}</span>
                  </div>

                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Number Plate</span>

                    <span className="font-semibold">
                      {vehicle.number_plate}
                    </span>
                  </div>

                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Category</span>

                    <span className="font-semibold capitalize">
                      {vehicle.category}
                    </span>
                  </div>

                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Fuel</span>

                    <span className="font-semibold capitalize">
                      {vehicle.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="bg-gray-50 shadow-md rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <ShieldCheck size={20} />
                  <h3 className="text-xl font-bold">Rental Status</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Availability</span>

                    {vehicle.isAvailable ? (
                      <span className="flex items-center gap-2 text-green-600 font-semibold">
                        <CheckCircle size={18} />
                        Available
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-red-600 font-semibold">
                        <XCircle size={18} />
                        Unavailable
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Rental Charge</span>

                    <span className="font-semibold text-green-600">
                      ₹{vehicle.price_perDay}/Day
                    </span>
                  </div>

                  <div className="flex justify-between shadow-xs p-2">
                    <span className="text-gray-500">Vehicle ID</span>

                    <span className="font-semibold">
                      #{vehicle._id?.slice(-6)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>

                    <span className="font-semibold">Ready For Booking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div className="mt-10 bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">About This Vehicle</h3>

              <p className="leading-8 text-gray-300">{vehicle.about}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VehicleViewModal;
