import React, { useEffect } from "react";
import "./Router.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import CreateActivity from "../Activity/CreateActivity";
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import CardsDetails from "../Details/CardsDetails";
import Activity from "../Activity/Activity";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={<Dashboard />} />}
        />

        <Route
          path="/create-activity"
          element={<ProtectedRoute component={<Activity />} />}
        />

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<CardsDetails />} />
      </Routes>
    </div>
  );
}
