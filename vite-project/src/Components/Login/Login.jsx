import React, { useEffect, useState } from "react";
import "./Login.css";
import loginImage from "../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userData);
    }
  }, [formErrors]);
  const token = Cookies.get("token");
  if (token) {
    navigate("/dashboard");
  }
  const handleChange = (e) => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(loginData));
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        loginData
      );

      Cookies.set("token", response.data.token, {samSite:"strict", httppOnly:true});
      navigate("/dashboard");
    } catch (error) {
      const message = "Email or password is incorrect";
      setFormErrors(validate(loginData, message))
      console.log(error);
    }
  };

  const validate = (loginData, message = "") => {
    let errors = {}

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
  }
  return (
    <div className="login__container">
      <div className="login__containerLeft">
        <img src={loginImage} alt="cycling man" />
      </div>
      <div className="login__containerRight">
        <h2>Login</h2>
        {formErrors.message && <div className="alert" style={{ padding: "10px", marginTop: "20px", border: "1px solid red", borderRadius: "5px" }}>
          <p style={{ color: "red" }}>{formErrors.message}</p>
        </div>}
        <form className="login__form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
          <input type="submit" value="Submit" onClick={handleSubmit} />
          <p>
            Do you have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
