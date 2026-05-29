import React, { useState } from "react";
import { Car, Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        formData,
      );
      
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setFormData({
          email: "",
          password: "",
        });

        if(user.role==="user"){
          navigate("/profile");
        }else{
          navigate("/admin");
        }
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      {/* LOGIN CONTAINER */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-black text-white p-12 relative">
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <div className="bg-white text-black p-2 rounded-xl">
              <Car size={28} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">RentRide</h1>

              <p className="text-sm text-gray-300">Vehicle Rental System</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-5xl font-bold leading-tight">
              Drive Your <br /> Dream Vehicle
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Manage bookings, rentals, and customers with a modern vehicle
              rental platform.
            </p>

            <div className="mt-10 flex gap-4">
              <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
                <h3 className="text-2xl font-bold">500+</h3>
                <p className="text-sm text-gray-300">Vehicles</p>
              </div>

              <div className="bg-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-gray-300">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          {/* MOBILE LOGO */}
          <div className="lg:hidden flex items-center gap-3 mb-10 justify-center">
            <div className="bg-black text-white p-2 rounded-xl">
              <Car size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">RentRide</h1>

              <p className="text-sm text-gray-500">Vehicle Rental System</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-2">
              Login to continue managing your rentals.
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>

              <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition">
                <Mail size={20} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 outline-none bg-transparent"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-4 py-3 focus-within:border-black transition">
                <LockKeyhole size={20} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-3 outline-none bg-transparent"
                  name="password"
                  value={formData.password}
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

            {/* OPTIONS */}
            <div className="flex items-center justify-end text-sm">
              <button
                type="button"
                className="text-black font-medium hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full bg-black hover:bg-gray-900 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-lg"
            >
              Login
            </button>
          </div>

          {/* FOOTER */}
          <p className="text-center text-gray-500 text-sm mt-2">
            if you are new user
            <Link
              to="/register"
              className="text-black font-medium hover:underline"
            >
              Register
            </Link>
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            © 2026 RentRide. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
