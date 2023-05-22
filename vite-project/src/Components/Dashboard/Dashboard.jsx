import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import Sidebar from "./Sidebar";
import { Avatar } from "@mui/material";
import running from "../images/running-1.png";
import cycling from "../images/cycling.jpg";
import swimming from "../images/swimming-1.png";
import hiking from "../images/hiking.jpg";
import walking from "../images/walking.jpg";
import avatar from "../images/avatar.png";
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { setAllActivities } from "../../features/activitySlice";
import Cards from "./Cards";

function Dashboard() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/activity/"
        );
        const data = await response.data;
        console.log(data);
        dispatch(setAllActivities(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchActivities();
  }, [activities]);

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
