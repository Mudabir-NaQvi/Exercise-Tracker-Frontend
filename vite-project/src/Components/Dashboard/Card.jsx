import React, { useEffect, useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ recentActivity, images, index }) {
  const dispatch = useDispatch();
  const [currentActivity, setCurrentActivity] = useState(recentActivity);

  return (
    <div
      className="card "
      style={{
        background: `url(${images[recentActivity.activityType]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}  
      name={recentActivity.activityType}
    >
      <h2>{recentActivity.activityType}</h2>
      {recentActivity.lastDate && (
          <div>
            <p className="activity__date">
          {new Date(recentActivity.lastDate).toDateString()}
         </p>
         <p className="activity__count">{recentActivity.count}</p>
          </div>
      )}
    </div>
  );
}
