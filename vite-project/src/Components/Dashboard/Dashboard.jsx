import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setAllActivities } from "../../features/activitySlice";
import Cards from "./Cards";
import Cookies from "js-cookie";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/activity/recent",
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          }
        );
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
      <div className="dashboard__main">
        
        <Cards />
      </div>
    </div>
  );
}

export default Dashboard;
