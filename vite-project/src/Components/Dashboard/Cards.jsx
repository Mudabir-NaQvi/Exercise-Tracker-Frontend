import "./Cards.css";
import { Avatar } from "@mui/material";
import Running from "../images/running-1.png";
import Cycling from "../images/cycling.jpg";
import Swimming from "../images/swimming-1.png";
import Hiking from "../images/hiking.jpg";
import Walking from "../images/walking.jpg";
import avatar from "../images/avatar.png";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cards = () => {
  const images = {
    Hiking,
    Swimming,
    Cycling,
    Running,
    Walking,
  };
  const currentUser = useSelector((state) => state.users.currentUser);
  const recentActivities = useSelector(state => state.activities.activities)
  return (
    <>
      <div className="row__header dashboard__row1">
        <div className="activity">
          <h3>Tracking Activity</h3>
          <p className="header__date">{new Date().toDateString()}</p>
        </div>
      </div>
      <div className="dashboard__grid">
        {recentActivities.map((recentActivity, index) => {
          return (
            <Link to={`/activity-details/${recentActivity.activityType}`} key={index} className="card__link">
              <Card
                recentActivity={recentActivity}
                index={index}
                images={images}
                className="card"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
