import React, { useEffect, useState } from "react";
import loginImage from "../images/login.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import "./EditActivity.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import moment from "moment";

moment.duration();
const EditActivity = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activityData, setActivityData] = useState({});
  const activityTypes = useSelector((state) => state.activities.activities);
  const { id } = useParams();
  const handleBackButton = () => {
    navigate(-1);
  };
  useEffect(() => {
    const fetchActivity = async () => {
      try {
        setIsLoading(true);
        // get specific activity
        const response = await axios.get(
          `http://localhost:5000/api/v1/activity/${id}`,
          {
            headers: {
              Authorization: Cookies.get("token"),
            },
          }
        );
        const data = await response.data;
        setActivityData(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchActivity();
  }, []);

  const getDate = () => {
    const dt = new Date(activityData.date);
    return dt
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");
  };

  const handleChange = (e) => {
    setActivityData((prevActivityData) => ({ ...prevActivityData, [e.target.name]: e.target.value }));
  };

  // update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {duration} = activityData;
    try {
      setIsLoading(true);
      await axios.put(
        `http://localhost:5000/api/v1/activity/${id}`,
        {...activityData, duration: getDuration()},
        {
          headers: {
            Authorization: Cookies.get("token"),
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      setError("Cannot set previous date and time")
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // get duration in minutes from 3h 20m format
  const getDuration = () => {
    const duration = String(activityData.duration);
    const [hours, minutes] = duration.split(" ");
    const result = parseInt(String(hours).replace("h", "") + +String(minutes).replace("m", ""))
    return result;
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
          {isLoading ? (
            <PulseLoader />
          ) : (
            <form className="edit__form" onSubmit={handleSubmit}>
              <select
                defaultValue={activityData.activityType}
                name="activityType"
                onChange={handleChange}
              >
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
                value={activityData.description}
                required
                maxLength={64}
                onChange={handleChange}
              />
              <input
                type="number"
                name="duration"
                min={1}
                max={500}
                placeholder="Duration in minutes"
                value={getDuration()}
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
              <input type="submit" value="Update" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditActivity;
