import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import { useDispatch, useSelector } from "react-redux";
import axios from "../../api/axios";
import { setAllActivities } from "../../features/activitySlice";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("activity/recent");
        const data = await response.data;
        dispatch(setAllActivities(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div className="dashboard__container">
      {/* sidebar */}

      <Sidebar />
      {/* main dashboard body */}
      <div className="dashboard__main my-10">
        <Cards />
      </div>
    </div>
  );
}

export default Dashboard;
