import React, { useEffect, useState } from "react";
import "./Activity.css";
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function Activity() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  return (
    <div className="activity__container">
      <div className="activity__containerLeft">
        <img src={loginImage} alt="cycling man" />
      </div>
      <div className="activity__containerRight">
        <ArrowBack
          className="back__icon"
          style={{ width: "40px", height: "40px" }}
          onClick={handleBackButton}
        />
        <h2>Create Activity</h2>
        <form className="activity__form">
          <input type="text" name="type" placeholder="Activity type" required />

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
  );
}
