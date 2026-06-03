import axios from "axios";
import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem("token");

  const getallContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/contact`, {
        headers: {
          Authorization: token,
        },
      });

      if (res.data?.success) {
        setContacts(res.data.contacts);
      } else {
        toast.error(res.data?.message);
      }
    } catch (error) {
      console.log("Error:", error.message);
      toast.error("Failed to fetch contacts");
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmation = confirm("Are you want to delete the contact");

      if (confirmation) {
        const res = await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/contact/${id}`,
          {
            headers: {
              Authorization: token,
            },
          },
        );

        if (res.data?.success) {
          toast.success(res.data.message);
          setContacts((prev) => prev.filter((item) => item._id !== id));
        }
      } else {
        toast.error("i dont want");
      }
    } catch (error) {
      toast.error("Failed to delete contact");
    }
  };

  useEffect(() => {
    getallContacts();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

        <div className="overflow-x-auto rounded-xl border border-gray-800 bg-gray-900 shadow-lg">
          <table className="w-full text-left">
            <thead className="bg-black">
              <tr>
                <th className="px-6 py-4 text-gray-300 font-semibold">#</th>
                <th className="px-6 py-4 text-gray-300 font-semibold">Name</th>
                <th className="px-6 py-4 text-gray-300 font-semibold">Email</th>
                <th className="px-6 py-4 text-gray-300 font-semibold">Phone</th>
                <th className="px-6 py-4 text-gray-300 font-semibold">
                  Message
                </th>
                <th className="px-6 py-4 text-gray-300 font-semibold text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {contacts?.length > 0 ? (
                contacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    className="border-t border-gray-800 hover:bg-gray-800 transition"
                  >
                    <td className="px-6 py-4 text-gray-400">{index + 1}</td>

                    <td className="px-6 py-4 text-white font-medium">
                      {contact.name}
                    </td>

                    <td
                      className="px-6 py-4 text-gray-300 max-w-[220px] truncate"
                      title={contact.email}
                    >
                      {contact.email}
                    </td>

                    <td className="px-6 py-4 text-gray-300">{contact.phone}</td>

                    <td
                      className="px-6 py-4 text-gray-300 max-w-[300px] truncate"
                      title={contact.message}
                    >
                      {contact.message}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="text-red-500 hover:text-red-400 transition"
                      >
                        <Trash size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">
                    No contacts found
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

export default AdminContacts;
