import React, { useEffect, useState } from "react";
import "./Login.css";
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Cookies from "js-cookie";
import { setCurrentUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

export default function Login() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    // getting token from browser cookie
    const token = Cookies.get("token");
    if (token) {
      // if token exists navigate to dashboard
      navigate("/dashboard");
    }
  }, []);
  const handleChange = (e) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(validate(loginData));
    try {
      const response = await axios.post("auth/login", loginData);
      dispatch(setCurrentUser(response.data.user));
      // setting a cookie in browswer coming in response from backend
      Cookies.set("token", response.data.token, { samSite: "strict" });
      navigate("/dashboard");
    } catch (error) {
      // if request fails set an error message in formErrors object
      const message = "Email or password is incorrect";
      setFormErrors(validate(loginData, message));
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validate = (loginData, message = "") => {
    let errors = {};

    if (!loginData.email) {
      errors.email = "Email is required";
    }
    if (!loginData.password) {
      errors.password = "Password is required";
    }

    if (loginData.email && loginData.password && message) {
      errors.message = message;
    }
    return errors;
  };

  return (
    <div className="login__container">
      <div className="login__containerLeft">
        <img src={loginImage} alt="cycling man" />
      </div>
      <div className="login__containerRight">
        <h2>Login</h2>
        {formErrors.message && (
          <div
            className="alert"
            style={{
              padding: "10px",
              marginTop: "20px",
              border: "1px solid red",
              borderRadius: "5px",
            }}
          >
            <p style={{ color: "red" }}>{formErrors.message}</p>
          </div>
        )}

        {isLoading ? (
          <PulseLoader />
        ) : (
          <form className="login__form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            {formErrors.email && (
              <p style={{ color: "red" }}>{formErrors.email}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            {formErrors.password && (
              <p style={{ color: "red" }}>{formErrors.password}</p>
            )}
            <input type="submit" value="Submit" onClick={handleSubmit} />
            <p>
              Do you have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
