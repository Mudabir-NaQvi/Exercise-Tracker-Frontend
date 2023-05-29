import React, { useEffect } from "react";
import "./Router.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Cookies from "js-cookie";
import Activity from "../Activity/Activity";
import Details from "../Details/Details";
import EditActivity from "../Activity/EditActivity";
import NotFound from "../Not Found/NotFound";

export default function Router() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

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
          path="/activity-details/:type"
          element={<ProtectedRoute component={<Details />} />}
        />
        <Route
          index={true}
          path="/activity-details/:type/:id"
          element={<ProtectedRoute component={<EditActivity />} />}
        />

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
