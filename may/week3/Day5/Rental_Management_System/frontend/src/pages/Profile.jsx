import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  ShieldCheck,
  CalendarDays,
  Cake,
} from "lucide-react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
      {user ? (
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
          {/* Top Banner */}
          <div className="h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative">
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
              <div className="w-28 h-28 rounded-full border-4 border-white bg-white shadow-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-purple-700 uppercase">
                  {user.name?.charAt(0)}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 pb-8 px-6 text-white">
            <h1 className="text-3xl font-bold text-center capitalize">
              {user.name}
            </h1>

            <p className="text-center text-gray-300 mt-1 capitalize">
              {user.role}
            </p>

            {/* Info Cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <Mail className="text-cyan-300" size={22} />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <Phone className="text-green-300" size={22} />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <Cake className="text-pink-300" size={22} />
                <div>
                  <p className="text-sm text-gray-300">Age</p>
                  <p className="font-medium">{user.age} Years</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <ShieldCheck className="text-yellow-300" size={22} />
                <div>
                  <p className="text-sm text-gray-300">Role</p>
                  <p className="font-medium capitalize">{user.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <CalendarDays className="text-orange-300" size={22} />
                <div>
                  <p className="text-sm text-gray-300">Joined On</p>
                  <p className="font-medium">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all duration-300 text-white font-semibold py-3 rounded-2xl shadow-lg">
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <p className="text-gray-500 text-lg">
            No user data found in localStorage
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
