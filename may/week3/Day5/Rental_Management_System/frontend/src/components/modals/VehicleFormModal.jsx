import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Car,
  Tag,
  Palette,
  Fuel,
  IndianRupee,
  FileText,
  Image,
} from "lucide-react";
import axios from "axios";

function VehicleFormModal({ onClose, vehicle, fetchVehicles }) {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    name: "",
    number_plate: "",
    brand: "",
    colour: "",
    category: "car",
    type: "petrol",
    price_perDay: "",
    isAvailable: true,
    about: "",
    thumbnail: "",
  });

  useEffect(() => {
    if (vehicle) {
      setFormData({
        name: vehicle.name || "",
        number_plate: vehicle.number_plate || "",
        brand: vehicle.brand || "",
        colour: vehicle.colour || "",
        category: vehicle.category || "car",
        type: vehicle.type || "petrol",
        price_perDay: vehicle.price_perDay || "",
        isAvailable: vehicle.isAvailable ?? true,
        about: vehicle.about || "",
        thumbnail: vehicle.thumbnail || "",
      });
    }
  }, [vehicle]);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (vehicle) {
        await axios.put(
          `${import.meta.env.VITE_BASE_URL}/vehicle/update/${vehicle._id}`,
          formData,
          {
            headers: {
              Authorization: token,
            },
          },
        );

        alert("Vehicle updated successfully");
      } else {
        await axios.post(
          `${import.meta.env.VITE_BASE_URL}/vehicle/create`,
          formData,
          {
            headers: {
              Authorization: token,
            },
          },
        );

        alert("Vehicle added successfully");
      }

      fetchVehicles();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto"
        >
          {/* HEADER */}

          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">
                  {vehicle ? "Edit Vehicle" : "Add New Vehicle"}
                </h2>

                <p className="text-gray-300 mt-1">
                  Add vehicles to your rental fleet
                </p>
              </div>

              <button
                onClick={onClose}
                className="bg-white/10 hover:bg-white/20 transition p-3 rounded-xl"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* PREVIEW CARD */}

            <div className="bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 rounded-3xl p-5 flex flex-col md:flex-row gap-5 mb-8">
              <img
                src={
                  formData.thumbnail ||
                  "https://placehold.co/300x200/e5e7eb/6b7280?text=Vehicle+Image"
                }
                alt="Vehicle"
                className="w-full md:w-52 h-36 object-cover rounded-2xl"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  {formData.name || "Vehicle Name"}
                </h3>

                <p className="text-gray-500 mt-1">
                  {formData.brand || "Brand Name"}
                </p>

                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-black text-white text-sm">
                    {formData.category}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm">
                    {formData.type}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    ₹{formData.price_perDay || 0}/day
                  </span>
                </div>
              </div>
            </div>

            {/* VEHICLE INFORMATION */}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900">
                Vehicle Information
              </h3>

              <div className="w-20 h-1 bg-black rounded-full mt-2" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* NAME */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Vehicle Name
                </label>

                <div className="relative">
                  <Car
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="BMW X5"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {/* NUMBER PLATE */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Number Plate
                </label>

                <div className="relative">
                  <Tag
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    name="number_plate"
                    value={formData.number_plate}
                    onChange={handleChange}
                    placeholder="OD 02 AB 1234"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {/* BRAND */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Brand
                </label>

                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="BMW"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* COLOR */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Colour
                </label>

                <div className="relative">
                  <Palette
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    name="colour"
                    value={formData.colour}
                    onChange={handleChange}
                    placeholder="Black"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {/* CATEGORY */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                >
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="scooty">Scooty</option>
                  <option value="ola">Ola</option>
                </select>
              </div>

              {/* FUEL */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Fuel Type
                </label>

                <div className="relative">
                  <Fuel
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  >
                    <option value="petrol">Petrol</option>
                    <option value="disel">Diesel</option>
                    <option value="ev">EV</option>
                    <option value="cng">CNG</option>
                  </select>
                </div>
              </div>

              {/* PRICE */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Price Per Day
                </label>

                <div className="relative">
                  <IndianRupee
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="number"
                    name="price_perDay"
                    value={formData.price_perDay}
                    onChange={handleChange}
                    placeholder="2500"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {/* THUMBNAIL */}

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Thumbnail URL
                </label>

                <div className="relative">
                  <Image
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>
            </div>

            {/* ABOUT */}

            <div className="mt-8">
              <label className="block mb-2 font-medium text-gray-700">
                About Vehicle
              </label>

              <div className="relative">
                <FileText
                  size={18}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <textarea
                  rows="5"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Describe vehicle features..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-black outline-none"
                />
              </div>
            </div>

            {/* AVAILABILITY */}

            <div className="mt-8 bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg">
                    Available For Booking
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Customers can rent this vehicle
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isAvailable: !prev.isAvailable,
                    }))
                  }
                  className={`w-16 h-9 rounded-full transition relative ${
                    formData.isAvailable ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-7 h-7 bg-white rounded-full transition-all ${
                      formData.isAvailable ? "left-8" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* FOOTER */}

            <div className="flex justify-end gap-4 mt-10 border-t pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-black to-gray-700 text-white font-semibold hover:scale-105 transition"
              >
                {vehicle ? "Update Vehicle" : "Save Vehicle"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default VehicleFormModal;
