import React, { useEffect, useState } from "react";
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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userData);
    }
  }, [formErrors]);
  const handleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(userData));

    try {
      await axios.post("http://localhost:5000/api/v1/auth/register", userData);
      navigate("/login");
    } catch (error) {
      let message = "Email already exists";
      setFormErrors(validate(userData, message));
      console.log(error);
    }
  };

  const validate = (formData, message = "") => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.firstName) {
      errors.firstName = "first name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "last name is required";
    }
    if (!formData.email) {
      errors.email = "email is required";
    } else if (!regexEmail.test(userData.email)) {
      errors.email = "this email is not valid";
    } else if (message) {
      errors.email = message;
    }
    if (!formData.password) {
      errors.password = "password is required";
    } else if (userData.password.length < 3) {
      errors.password = "password must be more than 3 characters";
    } else if (userData.password.length >= 12) {
      errors.password = "password cannot be more than 12 characters";
    }

    return errors;
  };
  return (
    <div className="register__container">
      <div className="register__containerLeft">
        <img src={registerImage} alt="cycling man" />
      </div>
      <div className="register__containerRight">
        <h2>Register</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          {formErrors.firstName && (
            <p style={{ color: "red" }}>{formErrors.firstName}</p>
          )}
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
          />
          {formErrors.lastName && (
            <p style={{ color: "red" }}>{formErrors.lastName}</p>
          )}

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {formErrors.email && (
            <p style={{ color: "red" }}>{formErrors.email}</p>
          )}
          {formErrors.message && (
            <p style={{ color: "red" }}>{formErrors.message}</p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {formErrors.password && (
            <p style={{ color: "red" }}>{formErrors.password}</p>
          )}

          <input type="submit" value="Submit" />
          <p>
            Already have an account? <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
