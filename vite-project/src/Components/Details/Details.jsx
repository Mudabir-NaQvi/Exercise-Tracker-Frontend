import React, { useEffect, useState } from "react";
import "./Details.css";
import Hiking from "../images/hiking.jpg";
import Swimming from "../images/swimming-1.png";
import Walking from "../images/walking.jpg";
import Cycling from "../images/cycling.jpg";
import Running from "../images/running-1.png";
import CardDetails from "./CardDetails";
import Sidebar from "../Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setActivityLogs } from "../../features/activitySlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";

function Details() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [shouldReload, setShouldReload] = useState();
  const activityLogs = useSelector((state) => state.activities.activityLogs);
  const activityType = useParams();
  const images = {
    Hiking,
    Swimming,
    Cycling,
    Running,
    Walking,
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/v1/activity/by-type?activityType=${activityType.type}`,
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          }
        );
        const data = await response.data;
        dispatch(setActivityLogs(data));
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActivities();
    setShouldReload(null);
  }, [shouldReload]);

  return (
    <div className="details__container">
      <div className="sidebar__container">
        <Sidebar />
      </div>
      <div className="details__main">
        <h2>{activityType.type}</h2>
        <img
          src={images[activityType.type]}
          className="details__image"
          alt="hiking"
        />
        <div className="detail__cards">
          {activityLogs.map((activityLog, index) => {
            return (
              <CardDetails
                activityLog={activityLog}
                key={index}
                setShouldReload={setShouldReload}
              />
            );
          })}
        </div>
        {isLoading && <PulseLoader />}
      </div>
    </div>
  );
}

export default Details;
