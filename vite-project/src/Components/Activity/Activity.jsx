import React, { useEffect, useState } from "react";
import "./Activity.css";
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "../../api/axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Activity() {
  const [activityData, setActivityData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activityErrors, setActivityErrors] = useState({});
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
    setActivityErrors(validate(activityData));
    if (Object.keys(validate(activityData)).length === 0) {
      try {
        setIsLoading(true);
        await axios.post("activity/create", activityData);
        toast.success("Created successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // navigate("/dashboard");
      } catch (error) {
        const message = "Cannot set previous date and time";
        setActivityErrors(validate(activityData, message));
        console.log(error);
        toast.error("Cannot create!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error("Please fill out all the required fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const validate = (activityData, message = "") => {
    const errors = {};

    if (!activityData.activityType) {
      errors.activityType = "activity type is required";
    }
    if (!activityData.description) {
      errors.description = "description is required";
    }
    if (!activityData.duration) {
      errors.duration = "duration is required";
    }
    if (!activityData.date) {
      errors.date = "date and time is required";
    } else if (message) {
      errors.date = message;
    }
    return errors;
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
          {activityErrors.activityType && (
            <p style={{ color: "red" }}>{activityErrors.activityType}</p>
          )}
          <input
            type="text"
            name="description"
            placeholder="Description"
            maxLength={64}
            onChange={handleChange}
          />
          {activityErrors.description && (
            <p style={{ color: "red" }}>{activityErrors.description}</p>
          )}
          <input
            type="number"
            name="duration"
            placeholder="Duration in minutes"
            min={1}
            max={500}
            onChange={handleChange}
          />
          {activityErrors.duration && (
            <p style={{ color: "red" }}>{activityErrors.duration}</p>
          )}
          <input
            type="datetime-local"
            name="date"
            placeholder="Date"
            onChange={handleChange}
            min={new Date().toISOString().slice(0, 16)}
            max={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
              .toISOString()
              .slice(0, 16)}
          />
          {activityErrors.date && (
            <p style={{ color: "red" }}>{activityErrors.date}</p>
          )}
          {isLoading && <PulseLoader />}
          <input type="submit" value={"Create"} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </div>
  );
}
