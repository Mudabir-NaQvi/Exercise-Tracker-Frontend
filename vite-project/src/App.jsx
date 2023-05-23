import React, { useEffect } from "react";
import Router from "./Components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "./features/userSlice";
export default function App() {
      //why dependency

  return (
    <div>
      <Router />
    </div>
  );
}
