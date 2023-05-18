import React from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
import { Avatar } from "@mui/material";
import running from "../images/running.png";
import cycling from "../images/cycling.png";
import swimming from "../images/swimming.png";
import hiking from "../images/hiking.png";
import walking from "../images/walking.png";

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
              backgroundPosition: "cover",
            }}>
            <h2>Running</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__cycling"
            style={{ background: `url(${cycling})` }}>
            <h2>Cycling</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
        </div>
        <div className="row dashboard__row3">
          <div
            className="card card__swimming"
            style={{ background: `url(${swimming})` }}>
            <h2>Swimming</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__hiking"
            style={{ background: `url(${hiking})` }}>
            <h2>Hiking</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
          <div
            className="card card__walking"
            style={{ background: `url(${walking})` }}>
            <h2>Walking</h2>
            <p className="activity__date">5th May, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
