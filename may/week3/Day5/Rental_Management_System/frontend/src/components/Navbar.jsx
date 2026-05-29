import React from "react";
import {
  Car,
  Menu,
  Bell,
  UserCircle2,
  Search,
  LayoutDashboard,
} from "lucide-react";
import { Link } from "react-router";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

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
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {user ? (
            <>
              {user.role === "admin" ? (
                <Link
                  to="/admin"
                  className="hidden sm:flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-200 transition"
                >
                  <LayoutDashboard size={18} />
                  <div className="text-left">
                    <h3 className="text-sm font-semibold text-gray-800">
                      Admin
                    </h3>

                    <p className="text-xs text-gray-500">Dashboard Access</p>
                  </div>
                </Link>
              ) : (
                <Link
                  to="/profile"
                  className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-xl hover:bg-yellow-400 transition-all font-medium"
                >
                  Profile
                </Link>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition-all font-medium"
            >
              Login
            </Link>
          )}

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
