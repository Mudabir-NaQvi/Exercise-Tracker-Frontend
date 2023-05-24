import React, { useEffect, useState } from 'react'
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import "./EditActivity.css"
const EditActivity = () => {
    const navigate = useNavigate();
    const handleBackButton = () => {
      navigate(-1);
    };
  return (
    <div>
      <div className="edit__container">
      <div className="edit__containerLeft">
        <img src={loginImage} alt="cycling man" />
      </div>
      <div className="edit__containerRight">
        <ArrowBack
          className="back__icon"
          style={{ width: "40px", height: "40px" }}
          onClick={handleBackButton}
        />
        <h2>Edit Activity</h2>
        <form className="edit__form">
        <select>
            {
              activityTypes.map((activity) => {
                return <option value={activity.activityType}>{activity.activityType}</option>
              })
            }
          </select>

          <input
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input type="time" name="time" placeholder="Time" />
          <input type="date" name="date" placeholder="Date" />
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
    </div>
  )
}

export default EditActivity
