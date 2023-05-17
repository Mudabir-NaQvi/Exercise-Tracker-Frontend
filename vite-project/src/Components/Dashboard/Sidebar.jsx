import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="dashboard__sidebar">
      <div className="dashboard__sidebarTop">
        <div className="dashboard__item dashboard__home">
          <HomeIcon style={{ width: "32", height: "32" }} />
          <Link to="/dashboard" className="link link__home">
            Home
          </Link>
        </div>
        <div className="dashboard__item dashboard__createActivity">
          <CreateIcon style={{ width: "32", height: "32" }} />
          <Link to="/create-activity" className="link link__create">
            Create
          </Link>
        </div>
      </div>
      <div className="dashboard__item dashboard__logout">
        <LogoutIcon style={{ width: "32", height: "32" }} />
        <Link to="/logout" className="link link__create">
          Logout
        </Link>
      </div>
    </div>
  );
}
