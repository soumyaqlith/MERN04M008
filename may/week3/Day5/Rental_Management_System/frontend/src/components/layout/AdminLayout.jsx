// layouts/AdminLayout.jsx

import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router";

import { LayoutDashboard, Car, Users, LogOut, Phone } from "lucide-react";

function AdminLayout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role !== "admin") {
      navigate("/");
      return;
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[260px] bg-black text-white p-5 flex flex-col justify-between">
        <div>
          <div className="mb-10 border-b border-gray-800 pb-5">
            <h1 
            onClick={()=>navigate("/")}
            className="text-3xl font-bold cursor-pointer"
            >RentRide</h1>

            <p className="text-gray-400 text-sm mt-1">Admin Panel</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-4 mb-8">
            <h3 className="font-semibold text-lg capitalize">{user?.name}</h3>

            <p className="text-sm text-gray-400">Administrator</p>
          </div>

          <div className="space-y-3">
            <Link
              to="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>

            <Link
              to="/admin/vehicles"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              <Car size={20} />
              Vehicles
            </Link>

            <Link
              to="/admin/users"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              <Users size={20} />
              Users
            </Link>
            <Link
              to="/admin/contacts"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              <Phone size={20} />
              Contacts
            </Link>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 px-4 py-3 rounded-xl transition font-medium"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
