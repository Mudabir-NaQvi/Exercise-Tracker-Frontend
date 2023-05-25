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
    setActivityData({ ...activityData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.put(
        `http://localhost:5000/api/v1/activity/${id}`,
        activityData,
        {
          headers: {
            Authorization: Cookies.get("token"),
          },
        }
      );
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDuration = () => {
    const duration = String(activityData.duration);
    const [hours, minutes] = duration.split(" ");
    return (
      String(hours).replace("h", "") * 60 + +String(minutes).replace("m", "")
    );
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
                type="text"
                name="duration"
                maxLength={3}
                placeholder="Duration in minutes"
                value={getDuration()}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                placeholder="Date"
                value={getDate()}
                onChange={handleChange}
                min={new Date()
                  .toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/\//g, "-")}
              />
              <input type="submit" value="Update" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditActivity;
