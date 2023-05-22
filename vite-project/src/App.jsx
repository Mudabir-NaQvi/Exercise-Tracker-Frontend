import React, { useEffect } from "react";
import Router from "./Components/Router/Router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUsers } from "./features/userSlice";
export default function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/v1/users/");
      const users = await response.data;
      dispatch(setUsers(users));
    };
    fetchUsers();
  }, []);
  // }, [users]);      //why dependency

  return (
    <div>
      <Router />
    </div>
  );
}
