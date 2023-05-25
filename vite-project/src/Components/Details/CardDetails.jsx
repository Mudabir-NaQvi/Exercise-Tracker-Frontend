import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import "./CardDetails.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";


const CardDetails = ({ activityLog, setShouldReload }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`${activityLog._id}`);
  };

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      setShouldReload("random value just to make the component rerender");
      await axios.delete(
        `http://localhost:5000/api/v1/activity/${activityLog._id}`,
        {
          headers: {
            Authorization: Cookies.get("token"),
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="details__cardContainer">
      {isLoading && <PulseLoader />}
      <div className="details__cardTop">
        <div className="details__date">
          <p className="date">{new Date(activityLog.date).toDateString()}</p>
          <p className="time">
            {new Date(activityLog.date).toLocaleTimeString()}
          </p>
        </div>
        <div className="detail__actions">
          <EditIcon
            className="details__action edit__icon"
            onClick={handleEdit}
          />
          <DeleteIcon
            className="details__action delete__icon"
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className="details__cardBottom">
        <p className="description">{activityLog.description}</p>
        <p className="duration">{activityLog.duration}</p>
      </div>
    </div>
  );
};

export default CardDetails;
