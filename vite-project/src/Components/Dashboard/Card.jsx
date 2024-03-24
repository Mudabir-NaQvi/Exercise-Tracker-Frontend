import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
export default function Card({ recentActivity, images, index }) {

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-[300px] text-4xl drop-shadow-2xl text-gray-100 rounded-md`}
      style={{
        background: `url(${images[recentActivity.activityType]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      name={recentActivity.activityType}
    >
      <h2>{recentActivity.activityType}</h2>
      {recentActivity.lastDate && recentActivity.count !== 0 && (
        <div>
          <p className="absolute left-0 bottom-0 text-sm ml-2 mb-2 bg-gray-900 py-1 px-2 rounded-xl">
            {new Date(recentActivity.lastDate).toDateString()}
          </p>
          <p className="absolute right-0 bottom-0 text-sm mr-4 mb-2 bg-gray-900 px-2 py-1 font-bold rounded-full">{recentActivity.count}</p>
        </div>
      )}
    </div>
  );
}
