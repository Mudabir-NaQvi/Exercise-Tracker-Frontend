import React from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
function Dashboard() {
  return (
    <div className="dashboard__container">
      {/* sidebar */}
      <Sidebar />
      {/* main dashboard body */}
      <div className="dashboard__main"></div>
    </div>
  );
}

export default Dashboard;
