import React from "react";
import "./Card.css"
import { useSelector } from "react-redux";

export default function Card({recentActivity, images, index}) {
    console.log(recentActivity);
  return (
    <div
      className="card "
      style={{
        background: `url(${images[index]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2>{recentActivity.activityType}</h2>
      {recentActivity.lastDate && <p className="activity__date">{new Date(recentActivity.lastDate).toDateString()}</p>}
    </div>
  );
}
