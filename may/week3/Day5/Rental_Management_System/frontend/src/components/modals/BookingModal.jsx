import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const BookingModal = ({ vehicleId, closeModal }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    pickupLocation: "",
    dropLocation: "",
  });

  const token = localStorage.getItem("token");
  const navigate=useNavigate()

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/booking/`,
        {
          vehicle: vehicleId,
          ...formData,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (res.data.success) {
        navigate("/my-bookings")
        toast.success(res.data.message);
        closeModal();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className="bg-zinc-900 w-full max-w-lg rounded-3xl p-8 border border-zinc-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Book Vehicle</h2>

          <button
            onClick={closeModal}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-zinc-400 text-sm">Start Date</label>

            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
              required
            />
          </div>

          <div>
            <label className="text-zinc-400 text-sm">End Date</label>

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
              required
            />
          </div>

          <div>
            <label className="text-zinc-400 text-sm">Pickup Location</label>

            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="Enter pickup location"
              className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
              required
            />
          </div>

          <div>
            <label className="text-zinc-400 text-sm">Drop Location</label>

            <input
              type="text"
              name="dropLocation"
              value={formData.dropLocation}
              onChange={handleChange}
              placeholder="Enter drop location"
              className="w-full mt-2 bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-bold"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
