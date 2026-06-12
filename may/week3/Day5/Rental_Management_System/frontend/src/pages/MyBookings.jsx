import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Calendar, MapPin, Car } from "lucide-react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token=localStorage.getItem("token")

  const fetchMyBookings = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/booking/my-booking`,{
            headers:{
                Authorization:token
            }
        }
       
      );
      if (res.data.success) {
        setBookings(res?.data?.myBookings);
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
    fetchMyBookings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

        {bookings?.length === 0 ? (
          <div className="bg-zinc-900 rounded-2xl p-10 text-center">
            <p className="text-zinc-400 text-lg">No bookings found</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {bookings?.map((booking) => (
              <div
                key={booking._id}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Vehicle Image */}
                  <div className="h-64 lg:h-full">
                    <img
                      src={booking.vehicle?.thumbnail}
                      alt={booking.vehicle?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-3 p-6">
                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                      <div>
                        <h2 className="text-3xl font-bold">
                          {booking.vehicle?.name}
                        </h2>

                        <p className="text-zinc-400 mt-2">
                          {booking.vehicle?.brand}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-green-400">
                          ₹{booking.totalAmount}
                        </h3>

                        <p className="text-zinc-400">Total Amount</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-8">
                      <div className="flex items-center gap-3">
                        <Calendar size={20} />
                        <div>
                          <p className="text-zinc-500 text-sm">Start Date</p>

                          <p>
                            {new Date(booking.startDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar size={20} />
                        <div>
                          <p className="text-zinc-500 text-sm">End Date</p>

                          <p>
                            {new Date(booking.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin size={20} />
                        <div>
                          <p className="text-zinc-500 text-sm">
                            Pickup Location
                          </p>

                          <p>{booking.pickupLocation}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin size={20} />
                        <div>
                          <p className="text-zinc-500 text-sm">Drop Location</p>

                          <p>{booking.dropLocation}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Car size={20} />
                        <div>
                          <p className="text-zinc-500 text-sm">Rental Days</p>

                          <p>{booking.totalDays} Days</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                        Booking Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
