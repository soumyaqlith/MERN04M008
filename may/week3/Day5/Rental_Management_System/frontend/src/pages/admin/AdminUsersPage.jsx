import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const getAllUser = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/auth/allusers`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (res.data.success === true) {
        setUsers(res?.data?.users);
      } else {
        toast.error(res.data.message);
      }
      console.log(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-500 text-sm mt-1">
            Total Users: {users.length}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-6 py-4 text-left">#</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Created At</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user._id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 text-gray-700">{index + 1}</td>

                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {user.name}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-700">{user.email}</td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          user.role === "admin"
                            ? "bg-black text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsersPage;
