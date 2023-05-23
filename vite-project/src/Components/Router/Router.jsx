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
import Activity from "../Activity/Activity";
<<<<<<< HEAD
import CardDetails from "../Details/CardDetails";
=======
import Details from "../Details/Details";
>>>>>>> 39855e33d1120dd6f39128556e01984b3649f391
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
           <Route
          path="/activity-details"
          element={<ProtectedRoute component={<CardDetails />} />}
        />

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
=======
        <Route path="/details" element={<Details />} />
>>>>>>> 39855e33d1120dd6f39128556e01984b3649f391
      </Routes>
    </div>
  );
}
