import React from "react";
import { Route, Routes } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import PublicRoutes from "./PublicRoutes";
import Vehicles from "../pages/Vehicles";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../components/layout/AdminLayout";
import Navbar from "../components/Navbar";
import PublicLayout from "../components/layout/PublicLayout";
import AdminVehiclePage from "../pages/admin/AdminVehiclePage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/vehicles" element={<Vehicles />} />

          <Route
            path="/profile"
            element={
              <PublicRoutes>
                <Profile />
              </PublicRoutes>
            }
          />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vehicles" element={<AdminVehiclePage />} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="contacts" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
