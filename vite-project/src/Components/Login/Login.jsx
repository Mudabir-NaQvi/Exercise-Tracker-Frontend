import React, { useState } from "react";
import "./Login.css";
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        loginData
      );
      Cookies.set("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login__container">
      <div className="login__containerLeft">
        <img src={loginImage} alt="cycling man" />
      </div>
      <div className="login__containerRight">
        <h2>Login</h2>
        <form className="login__form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <input type="submit" value="Submit" onClick={handleSubmit} />
          <p>
            Do you have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
