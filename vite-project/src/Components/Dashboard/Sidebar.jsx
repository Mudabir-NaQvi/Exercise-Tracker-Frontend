import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
  };
  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebarTop">
        <div className="dashboard__item dashboard__home">
          <Link to="/dashboard" className="link link__home">
            <HomeIcon style={{ width: "32", height: "32" }} />
            <p>Home</p>
          </Link>
        </div>
        <div className="dashboard__item dashboard__createActivity">
          <Link to="/create-activity" className="link link__create">
            <CreateIcon style={{ width: "32", height: "32" }} />
            <p>Create</p>
          </Link>
        </div>
      </div>
      <div className="dashboard__item dashboard__logout">
        <Link to="/login" className="link link__create" onClick={handleLogout}>
          <LogoutIcon style={{ width: "32", height: "32" }} />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
}
