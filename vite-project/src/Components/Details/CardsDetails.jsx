import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import "./CardsDetails.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CardsDetails = () => {
  return (
    <div className="details__cardContainer">
      <div className="details__cardTop">
        <div className="details__date">
          <p className="date">12 May, 2023</p>
          <p className="time">12:35 AM</p>
        </div>
        <div className="detail__actions">
          <EditIcon  className="details__action edit__icon"/>
          <DeleteIcon className="details__action delete__icon"/>
        </div>
        </div>
        <div className="details__cardBottom">
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            at.
          </p>
          <p className="duration">4hr</p>
        </div>
      </div>
  );
};

export default CardsDetails;
