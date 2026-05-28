import React, { useState } from "react";
import {
  Car,
  User,
  Mail,
  LockKeyhole,
  Phone,
  MapPin,
  Calendar,
  Upload,
  Eye,
  ArrowLeft,
  ArrowRight,
  Bike,
  EyeOff,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        formData,
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setFormData({
          name: "",
          age: "",
          phone: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-gray-200 flex items-center justify-center p-4">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl bg-white rounded-[35px] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-between bg-black text-white p-14 relative overflow-hidden">
          {/* BG EFFECT */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

          {/* LOGO */}
          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-white text-black p-3 rounded-2xl">
                <Car size={30} />
              </div>

              <div>
                <h1 className="text-3xl font-bold">RentRide</h1>

                <p className="text-gray-400 text-sm">Vehicle Rental Platform</p>
              </div>
            </div>

            {/* TEXT */}
            <div className="mt-24">
              <h2 className="text-6xl font-bold leading-tight">
                Start Your <br />
                Journey With Us
              </h2>

              <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-md">
                Register your account and enjoy seamless vehicle booking, rental
                tracking, and premium support.
              </p>
            </div>
          </div>

          {/* STEP */}
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-24 h-2 rounded-full bg-white"></div>

            <div className="w-24 h-2 rounded-full bg-white/20"></div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 sm:p-12 lg:p-14">
          {/* MOBILE LOGO */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <div className="bg-black text-white p-2 rounded-xl">
              <Car size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">RentRide</h1>

              <p className="text-sm text-gray-500">Vehicle Rental Platform</p>
            </div>
          </div>

          {/* HEADER */}
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 flex gap-2">
              Create Account <Bike size={40} color="blue" />
            </h2>
          </div>

          {/* FORM */}
          <div className="space-y-3">
            {/* NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-5 py-4 focus-within:border-black transition-all duration-300">
                <User size={20} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-3 bg-transparent outline-none"
                  value={formData.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* AGE + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* AGE */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Age
                </label>

                <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-5 py-4">
                  <Calendar size={20} className="text-gray-400" />

                  <input
                    type="number"
                    placeholder="Age"
                    className="w-full px-3 bg-transparent outline-none"
                    value={formData.age}
                    name="age"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone
                </label>

                <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-5 py-4">
                  <Phone size={20} className="text-gray-400" />

                  <input
                    type="number"
                    placeholder="Phone number"
                    className="w-full px-3 bg-transparent outline-none"
                    value={formData.phone}
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-5 py-4">
                <Mail size={20} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-3 bg-transparent outline-none"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-5 py-4">
                <LockKeyhole size={20} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full px-3 bg-transparent outline-none"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500" />
                  ) : (
                    <Eye size={20} className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-2">
              <button
                onClick={handleRegister}
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Register
              </button>
            </div>
          </div>

          {/* FOOTER */}
          <p className="text-center text-gray-400 text-sm mt-10">
            © 2026 RentRide. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
