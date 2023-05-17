import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./Router.css";
import Dashboard from "../Dashboard/Dashboard";
import Cookies from "js-cookie";

export default function Router() {
  const navigate = useNavigate();
  // console.log(location)  ;
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
