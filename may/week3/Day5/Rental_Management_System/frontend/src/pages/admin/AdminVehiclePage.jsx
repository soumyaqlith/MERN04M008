import React, { useEffect, useState } from "react";
import {
  Plus,
  Car,
  Fuel,
  IndianRupee,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";
import VehicleFormModal from "../../components/modals/VehicleFormModal";
import axios from "axios";
import VehicleViewModal from "../../components/modals/VehicleViewModal";
import { toast } from "react-toastify";

function AdminVehiclePage() {
  const [showModal, setShowModal] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [editVehicle, setEditVehicle] = useState(null);

  const token = localStorage.getItem("token");

  const fetchVehicles = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/vehicle/all-vehicle`,
      );
      // console.log(res);

      setVehicles(res.data.vehicles || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const handleDelete = async (vehicleId) => {
    try {
      console.log("hii i want delete");

      const confirmation = confirm("Are you sure to delete the vehicle");
      if (confirmation) {
        const res = await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/vehicle/delete/${vehicleId}`,
          {
            headers: {
              Authorization: token,
            },
          },
        );

        if (res.data.success) {
          toast.success(res.data.message);
          fetchVehicles();
        } else {
          toast.error(res.data.message);
        }
      } else {
        toast.error("i dont want");
      }
    } catch (error) {}
  };

  return (
    <div className="p-6">
      {/* HEADER */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Vehicle Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all vehicles in your rental system
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          <Plus size={20} />
          Add Vehicle
        </button>
      </div>

      {/* LOADING */}

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      ) : vehicles.length === 0 ? (
        <div className="bg-white border rounded-3xl p-20 text-center">
          <Car size={60} className="mx-auto text-gray-400" />

          <h2 className="text-2xl font-bold mt-4">No Vehicles Found</h2>

          <p className="text-gray-500 mt-2">
            Start by adding your first vehicle.
          </p>
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              {/* Small Image */}
              <div className="relative">
                <img
                  src={vehicle.thumbnail || "https://placehold.co/400x250"}
                  alt={vehicle.name}
                  className="w-full h-36 object-cover"
                />

                <span
                  className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${
                    vehicle.isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {vehicle.isAvailable ? "Available" : "Booked"}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-1">
                      {vehicle.name}
                    </h3>

                    <p className="text-sm text-gray-500">{vehicle.brand}</p>
                  </div>

                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">
                    {vehicle.category}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>

                    <div className="flex items-center text-lg font-bold text-black">
                      <IndianRupee size={16} />
                      {vehicle.price_perDay}
                      <span className="text-xs text-gray-500 font-normal ml-1">
                        /day
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => {
                      setEditVehicle(vehicle);
                      setShowModal(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-xl text-sm font-medium transition cursor-pointer"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setShowViewModal(true);
                      setSelectedVehicle(vehicle);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-yellow-600 hover:bg-yellow-100 py-2 rounded-xl text-sm font-medium transition cursor-pointer"
                  >
                    <Eye size={16} />
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(vehicle._id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-xl text-sm font-medium transition cursor-pointer"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <VehicleFormModal
          vehicle={editVehicle}
          fetchVehicles={fetchVehicles}
          onClose={() => {
            setShowModal(false);
            setEditVehicle(null);
          }}
        />
      )}

      {showViewModal && (
        <VehicleViewModal
          vehicle={selectedVehicle}
          onClose={() => {
            setShowViewModal(false);
          }}
        />
      )}
    </div>
  );
}

export default AdminVehiclePage;
