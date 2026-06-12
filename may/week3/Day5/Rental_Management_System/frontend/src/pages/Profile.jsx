import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
  Pencil,
  Car,
  Bike,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate=useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

   const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {user ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDEBAR */}
          <div className="bg-white rounded-3xl shadow-lg p-6">
            {/* Profile */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              <h1 className="text-2xl font-bold mt-4 capitalize text-gray-800">
                {user.name}
              </h1>

              <p className="text-gray-500 capitalize">{user.role}</p>

              <button className="mt-5 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition-all">
                <Pencil size={18} />
                Edit Profile
              </button>
            </div>

            {/* Divider */}
            <div className="border-t my-6"></div>

            {/* Menu */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 text-blue-700 font-medium cursor-pointer">
                <User size={20} />
                My Profile
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition-all">
                <Car size={20} />
                My Bookings
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition-all">
                <Bike size={20} />
                Booking History
              </div>

              <button 
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 text-red-500 cursor-pointer transition-all">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* USER INFO */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Personal Information
                </h2>

                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-sm font-medium">
                  Update
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="text-blue-600" size={20} />
                    <p className="text-gray-500 text-sm">Full Name</p>
                  </div>

                  <p className="font-semibold text-gray-800 capitalize">
                    {user.name}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="text-green-600" size={20} />
                    <p className="text-gray-500 text-sm">Email Address</p>
                  </div>

                  <p className="font-semibold text-gray-800">{user.email}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="text-purple-600" size={20} />
                    <p className="text-gray-500 text-sm">Phone Number</p>
                  </div>

                  <p className="font-semibold text-gray-800">{user.phone}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-orange-500" size={20} />
                    <p className="text-gray-500 text-sm">Account Role</p>
                  </div>

                  <p className="font-semibold text-gray-800 capitalize">
                    {user.role}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 md:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <CalendarDays className="text-pink-600" size={20} />
                    <p className="text-gray-500 text-sm">Member Since</p>
                  </div>

                  <p className="font-semibold text-gray-800">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* RENTAL SUMMARY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-3xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Rentals</p>

                    <h2 className="text-3xl font-bold mt-2 text-gray-800">
                      12
                    </h2>
                  </div>

                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <Car className="text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Active Booking</p>

                    <h2 className="text-3xl font-bold mt-2 text-gray-800">2</h2>
                  </div>

                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Bike className="text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Spent</p>

                    <h2 className="text-3xl font-bold mt-2 text-gray-800">
                      ₹8,500
                    </h2>
                  </div>

                  <div className="bg-orange-100 p-3 rounded-2xl">
                    <ShieldCheck className="text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <p className="text-gray-500 text-lg">No user data found</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
