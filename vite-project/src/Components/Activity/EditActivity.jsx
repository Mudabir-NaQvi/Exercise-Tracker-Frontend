import React, { useEffect, useState } from "react";
import loginImage from "../images/login.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import "./EditActivity.css";
import { useSelector } from "react-redux";
import axios from "../../api/axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

moment.duration();
const EditActivity = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activityErrors, setActivityErrors] = useState({});
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
        const response = await axios.get(`activity/${id}`);
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



  const handleChange = (e) => {
    setActivityData((prevActivityData) => ({
      ...prevActivityData,
      [e.target.name]: e.target.value,
    }));
  };

  // update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setActivityErrors(validate(activityData));
    const { duration } = activityData;
    if (Object.keys(validate(activityData)).length === 0) {
      try {
        setIsLoading(true);
        await axios.put(`/activity/${id}`, {
          ...activityData,
          duration: activityData.duration,
        });
        toast.success("Updated successfully !", {
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
        toast.error("Cannot Update!", {
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
              {activityErrors.description && (
                <p style={{ color: "red" }}>{activityErrors.description}</p>
              )}
              <input
                type="number"
                name="duration"
                required
                min={1}
                max={500}
                placeholder="Duration in minutes"
                value={activityData.duration}
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
                value={moment(activityData.date).format("YYYY-MM-DDTkk:mm")}
                min={new Date().toISOString().slice(0, 16)}
              />
              {activityErrors.date && (
                <p style={{ color: "red" }}>{activityErrors.date}</p>
              )}
              <input type="submit" value="Update" />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default EditActivity;
