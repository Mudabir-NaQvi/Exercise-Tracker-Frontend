import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  // useHistory,
} from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import "./Router.css";
import Dashboard from "../Dashboard/Dashboard";
import Cookies from "js-cookie";
import { isLoggedIn } from "./isLoggedIn";

export default function Router() {
  const navigate = useNavigate();
  // const history = useHistory();
  // console.log(location);
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate("../dashboard", { replace: true });
      // if (location.pathname === "/login") {
      //   navigate("/dashboard");
      //   console.log(location.pathname);
      // }
      // history.replace("/dashboard");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={isLoggedIn("/login", <Login />)} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
