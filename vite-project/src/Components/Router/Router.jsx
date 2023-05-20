import React, { useEffect } from "react";
import "./Router.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CreateActivity from "../Activity/CreateActivity"
import Cookies from "js-cookie";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={<Dashboard />} />}
        />

        <Route path="/" element={<LandingPage />} />
        <Route path="/activity" element={<CreateActivity />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
