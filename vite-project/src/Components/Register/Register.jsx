import React, { useState } from "react";
import "./Register.css";
import registerImage from "../images/register.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:5000/api/v1/auth/register", userData);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register__container">
      <div className="register__containerLeft">
        <img src={registerImage} alt="cycling man" />
      </div>
      <div className="register__containerRight">
        <h2>Register</h2>
        <form className="register__form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
          />
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
            Already have an account? <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
