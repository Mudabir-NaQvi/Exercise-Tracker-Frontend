import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const isLoggedIn = (path, component) => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  if (path == "/login" && token) {
    navigate("/dashboard");
  }
  return component;
};
