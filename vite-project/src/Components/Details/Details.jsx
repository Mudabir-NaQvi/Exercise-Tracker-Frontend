import React from 'react'
import "./Details.css";
import hiking from "../images/hiking.jpg";
import CardsDetails from './CardsDetails';
import Sidebar from '../Dashboard/Sidebar';
function Details() {
  return (
    <div className="details__container">
      <div className="sidebar__container">
        <Sidebar />
      </div>
      <div className="details__main">
        <h2>Hiking</h2>
        <img src={hiking} className="details__image" alt="hiking" />
        <div className="detail__cards">
          <CardsDetails />
          <CardsDetails />
          <CardsDetails />
          <CardsDetails />
          <CardsDetails />
        </div>
      </div>
    </div>
  );
}

export default Details
