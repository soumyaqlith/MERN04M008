import React from "react";
import { Car, Menu, Bell, UserCircle2, Search } from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-10">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-black text-white p-2 rounded-xl">
              <Car size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">RentRide</h1>
              <p className="text-xs text-gray-500 -mt-1">
                Vehicle Rental System
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/vehicles"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              Vehicles
            </Link>

            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              Bookings
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-xl">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search vehicles..."
              className="bg-transparent outline-none px-2 text-sm w-52"
            />
          </div>

          {/* <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
            <Bell size={22} className="text-gray-700" />

            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
          </button>

          <div className="hidden sm:flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-200 transition">
            <UserCircle2 size={28} className="text-gray-700" />

            <div className="text-left">
              <h3 className="text-sm font-semibold text-gray-800">Admin</h3>

              <p className="text-xs text-gray-500">Dashboard Access</p>
            </div>
          </div> */}

          <Link
            to="/login"
            className="text-gray-700 hover:text-black font-medium transition bg-yellow-500 p-1 rounded-xl"
          >
            Login
          </Link>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
