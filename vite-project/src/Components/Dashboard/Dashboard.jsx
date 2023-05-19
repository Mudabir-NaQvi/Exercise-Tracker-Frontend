import React from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
import { Avatar } from "@mui/material";
import running from "../images/running-1.png";
import cycling from "../images/cycling.jpg";
import swimming from "../images/swimming-1.png";
import hiking from "../images/hiking.jpg";
import walking from "../images/walking.jpg";

function Dashboard() {
  return (
    <div className="dashboard__container">
      {/* sidebar */}
      <Sidebar />
      {/* main dashboard body */}
      <div className="dashboard__main">
        <div className="row__header dashboard__row1">
          <div className="activity">
            <h3>Tracking Activity</h3>
            <p className="header__date">5th May, 2023</p>
          </div>
          <div className="avatar__container">
            <Avatar className="avatar" />
            <p className="username">Tariq Hussain</p>
          </div>
        </div>
        <div className="row dashboard__row2">
          <div
            className="card card__running"
            style={{
              background: `url(${running})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Running</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__cycling"
            style={{
              background: `url(${cycling})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Cycling</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
        </div>
        <div className="row dashboard__row3">
          <div
            className="card card__swimming"
            style={{
              background: `url(${swimming})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Swimming</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__hiking"
            style={{
              background: `url(${hiking})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Hiking</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__walking"
            style={{
              background: `url(${walking})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
            <h2>Walking</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
