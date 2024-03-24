import React, { useEffect, useState } from "react";
import "./Details.css";
import Running from "../images/running-1.png";
import Cycling from "../images/Cycle.jpg";
import Swimming from "../images/Swim.jpg";
import Hiking from "../images/Hike.jpg";
import Walking from "../images/Walk.jpg";

import CardDetails from "./CardDetails";
import Sidebar from "../Dashboard/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setActivityLogs } from "../../features/activitySlice";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
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
          `activity/by-type?activityType=${activityType.type}`
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
          {/* {console.log()} */}
          {activityLogs.length !== 0 ? (
            activityLogs.map((activityLog, index) => {
              return (
                <CardDetails
                  activityLog={activityLog}
                  key={index}
                  setShouldReload={setShouldReload}
                />
              );
            })
          ) : (
            <h2 style={{ padding: "10px" }}>Activity Log is Empty</h2>
          )}
        </div>
        {isLoading && <PulseLoader />}
      </div>
    </div>
  );
}

export default Details;
