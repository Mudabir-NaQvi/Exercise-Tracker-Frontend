// import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import React from "react";

export default function ProtectedRoute(props) {
  const { component } = props;
  let navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/");
    }
  }, []);
  return <div>{component}</div>;
}
