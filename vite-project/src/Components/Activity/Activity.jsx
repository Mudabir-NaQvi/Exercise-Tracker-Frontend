import React, { useEffect, useState } from "react";
import "./Activity.css";
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import moment from 'moment'

export default function Activity() {
  const [activityData, setActivityData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const activityTypes = useSelector((state) => state.activities.activities);
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setActivityData((prevActivityData) => ({
      ...prevActivityData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(activityData);
    try {
      setIsLoading(true);
      const response = await axios.post(
        `http://localhost:5000/api/v1/activity/create`,
        activityData,
        {
          headers: {
            Authorization: Cookies.get("token"),
          },
        }
      );
      navigate('/dashboard');
    } catch (error) {
      setError("Cannot set previous date and time")
      console.log(error);
    }finally{
      setIsLoading(false);
    }
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
        <h2>Activity</h2>
        <form className="activity__form" onSubmit={handleSubmit}>
          <select onChange={handleChange} name="activityType" required>
            <option disabled selected>
              Select Activity Type
            </option>
            {activityTypes.map((activity, index) => {
              return (
                <option value={activity.activityType} key={index}>
                  {activity.activityType}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            maxLength={64}
            onChange={handleChange}
            />
          <input
            type="number"
            name="duration"
            placeholder="Duration in minutes"
            required
            min={1}
            max={500}
            onChange={handleChange}
          />
          
          <input
            type="datetime-local"
            name="date"
            placeholder="Date"
            onChange={handleChange}
             min={new Date().toISOString().slice(0, 16)}
          />
          {error && <p style={{color:"red"}}>{error}</p>}
          {isLoading && <PulseLoader/>}
          <input type="submit" value={"Create"} />
        </form>
      </div>
    </div>
  );
}
