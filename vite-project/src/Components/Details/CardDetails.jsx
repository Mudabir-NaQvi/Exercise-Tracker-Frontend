import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import "./CardDetails.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CardDetails = ({activityLog}) => {

  const handleEdit = () => {

  }
  return (
    <div className="details__cardContainer">
      <div className="details__cardTop">
        <div className="details__date">
          <p className="date">{new Date(activityLog.date).toDateString()}</p>
          <p className="time">{new Date(activityLog.date).toLocaleTimeString()}</p>
        </div>
        <div className="detail__actions">
          <EditIcon  className="details__action edit__icon" onClick={handleEdit}/>
          <DeleteIcon className="details__action delete__icon"/>
        </div>
        </div>
        <div className="details__cardBottom">
          <p className="description">
            {activityLog.description}
          </p>
          <p className="duration">{activityLog.duration}</p>
        </div>
      </div>
  );
};

export default CardDetails;
