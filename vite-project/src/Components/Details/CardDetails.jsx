import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import "./CardDetails.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const CardDetails = ({ activityLog, setShouldReload }) => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`${activityLog.id}`);
  };

  return (
    <div className="details__cardContainer">
      {isShow && (
        <DeleteModal
          setIsShow={setIsShow}
          setShouldReload={setShouldReload}
          id={activityLog.id}
        />
      )}

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
            onClick={() => setIsShow(true)}
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