import Running from "../images/running-1.png";
import Cycling from "../images/Cycle.jpg";
import Swimming from "../images/Swim.jpg";
import Hiking from "../images/Hike.jpg";
import Walking from "../images/Walk.jpg";

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
          <h3 className="text-gray-900 text-5xl">Tracking Activity</h3>
          <p className="p-2 text-sm text-gray-500">{new Date().toDateString()}</p>
        </div>
      </div>
      <div className="dashboard__grid py-4 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recentActivities.map((recentActivity, index) => {
          return (
            <Link to={`/activity-details/${recentActivity.activityType}`} key={index} className={`${index === 0 ? "md:col-span-2" : "col-span-1"}`}>
              <Card
                recentActivity={recentActivity}
                index={index}
                images={images}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
