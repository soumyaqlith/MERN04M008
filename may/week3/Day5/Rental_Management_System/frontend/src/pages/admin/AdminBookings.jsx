import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const token=localStorage.getItem("token")

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/booking/all-booking`,
        {
            headers:{
                Authorization:token
            }
        }
      );

      if (res.data.success) {
        setBookings(res.data?.allBookings);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-5 border-b">
          <h1 className="text-2xl font-bold">All Vehicle Bookings</h1>
        </div>

        {bookings.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No bookings found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Vehicle</th>
                  <th className="text-left p-4">Customer</th>
                  <th className="text-left p-4">Dates</th>
                  <th className="text-left p-4">Drop</th>
                  <th className="text-left p-4">Pickup</th>
                  <th className="text-left p-4">Days</th>
                  <th className="text-left p-4">Amount</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking._id} className="border-t hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={booking.vehicle?.thumbnail}
                          alt={booking.vehicle?.name}
                          className="w-14 h-14 rounded-lg object-cover"
                        />

                        <div>
                          <p className="font-semibold">
                            {booking.vehicle?.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {booking.vehicle?.brand}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <div>
                        <p className="font-medium">{booking.user?.name}</p>

                        <p className="text-sm text-gray-500">
                          {booking.user?.email}
                        </p>
                      </div>
                    </td>

                    <td className="p-4">
                      <div className="text-sm">
                        <p>
                          {new Date(booking.startDate).toLocaleDateString()}
                        </p>

                        <p className="text-gray-500">to</p>

                        <p>{new Date(booking.endDate).toLocaleDateString()}</p>
                      </div>
                    </td>

                    <td className="p-4">{booking.pickupLocation}</td>

                    <td className="p-4">{booking.dropLocation}</td>

                    <td className="p-4">{booking.totalDays}</td>

                    <td className="p-4 font-bold text-green-600">
                      ₹{booking.totalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBookings;
