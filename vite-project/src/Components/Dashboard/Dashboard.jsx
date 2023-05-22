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
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllActivities } from "../../features/activitySlice";
import Cards from "./Cards";
import Cookies from "js-cookie";

function Dashboard() {
<<<<<<< HEAD
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
=======
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);
>>>>>>> 6f8638d332ab487afa5a37d1e62fd83ad88eb803
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
<<<<<<< HEAD
          "http://localhost:5000/api/v1/activity/recent",
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          }
=======
          "http://localhost:5000/api/v1/activity/"
>>>>>>> 6f8638d332ab487afa5a37d1e62fd83ad88eb803
        );
        const data = await response.data;
        console.log(data);
        dispatch(setAllActivities(data));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchActivities();
<<<<<<< HEAD
  }, []);
=======
  }, [activities]);
>>>>>>> 6f8638d332ab487afa5a37d1e62fd83ad88eb803

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
