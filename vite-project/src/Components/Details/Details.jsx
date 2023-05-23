import React from 'react'
import "./Details.css";
import hiking from "../images/hiking.jpg";
import CardDetails from './CardDetails';
import Sidebar from '../Dashboard/Sidebar';
function Details() {
  return (
    <div className="details__container">
        <Sidebar/>
        <div className="details__main">
        <h2>Hiking</h2>
        <img src={hiking} className="details__image" alt="hiking"/>
        <div className="detail__cards">
            <CardDetails/>
            <CardDetails/>
            <CardDetails/>
            <CardDetails/>
            <CardDetails/>
        </div>
        </div>
    </div>
  )
}

export default Details
