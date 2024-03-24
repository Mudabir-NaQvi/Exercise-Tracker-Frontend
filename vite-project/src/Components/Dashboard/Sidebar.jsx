import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";

function Sidebar() {
  const {firstName, email} = useSelector((state) => state.users.currentUser);

  const handleLogout = () => {
    Cookies.remove("token");
  };
  return (
    <div className="sticky top-0 h-screen">
      <div className="flex h-screen flex-col justify-between border-e bg-gray-900">
        <div className="px-2 py-6">
          <ul className="mt-6 space-y-1">
            <Link
              to="/dashboard"
              className="flex items-center justify-center  rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 sm:justify-start"
            >
              <GoHome
                className="sm:mr-2"
                style={{ width: "24", height: "24" }}
              />
              <p className="hidden sm:block">Home</p>
            </Link>

            <Link
              to="/create-activity"
              className="flex items-center justify-center  rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 sm:justify-start"
            >
              <IoCreateOutline
                className="sm:mr-2"
                style={{ width: "24", height: "24" }}
              />
              <p className="hidden sm:block">Create</p>
            </Link>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-b border-gray-500">
          <Link
            to="/login"
            className="flex items-center justify-center  rounded-lg px-4 py-2 m-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 sm:justify-start"
            onClick={handleLogout}
          >
            <IoMdLogOut
              className="sm:mr-2"
              style={{ width: "24", height: "24" }}
            />
            <p className="hidden sm:block">Log out</p>
          </Link>
          <a
            href="#"
            className="flex items-center justify-center py-2 gap-2 bg-gray-700 text-white hover:bg-gray-100 hover:text-gray-900 sm:justify-start px-4"
          >
            <img
              alt=""
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
              className="size-10 rounded-full object-cover"
            />

            <div className="hidden sm:block">
              <p className="text-xs">
                <strong className="block font-medium">{firstName}</strong>

                <span> {email} </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
