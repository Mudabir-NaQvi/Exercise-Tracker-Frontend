import "./Cards.css";
import { Avatar } from "@mui/material";
import running from "../images/running-1.png";
import cycling from "../images/cycling.jpg";
import swimming from "../images/swimming-1.png";
import hiking from "../images/hiking.jpg";
import walking from "../images/walking.jpg";
import avatar from "../images/avatar.png";
import Card from "./Card";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
const Cards = () => {
  const [userData, setUserData] = useState({});
  let images = [running, cycling, swimming, hiking, walking];
  const recentActivities = useSelector((state) => state.activities.activities);
  const currentUser = useSelector(state => state.users.currentUser);
  // console.log(recentActivities);
  console.log("current User", currentUser);

  return (
    <>
      <div className="row__header dashboard__row1">
        <div className="activity">l
          <h3>Tracking Activity</h3>
          <p className="header__date">5th May, 2023</p>
        </div>
        <div className="avatar__container">
          <Avatar className="avatar" src={avatar} />
          {/* <p className="username">{currentUser.firstName?currentUser.firstName:"Loading..."}</p> */}
          <p className="username">{"Loading..."}</p>
        </div>
      </div>
      <div className="dashboard__grid">
        {recentActivities.map((recentActivity, index) => {
          return (
            <Card
              recentActivity={recentActivity}
              index={index}
              key={index}
              images={images}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
