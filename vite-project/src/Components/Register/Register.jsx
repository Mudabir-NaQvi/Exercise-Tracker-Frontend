import React, { useEffect, useState } from "react";
import "./Register.css";
import registerImage from "../images/register.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormErrors(validate(userData));
    if (Object.keys(validate(userData)).length === 0) {
      try {
        await axios.post("auth/register", userData);
        toast.success("Wow so easy !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // navigate("/login");
      } catch (error) {
        let message = "Email already exists";
        setFormErrors(validate(userData, message));
        console.log(error);
        toast.error("Cannot register!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      toast.error("Please fill out all the required fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const validate = (formData, message = "") => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexUsername = /^[a-z ,.'-]+$/i;
    // first name validation
    if (!formData.firstName) {
      errors.firstName = "first name is required";
    } else if (!regexUsername.test(userData.firstName)) {
      errors.firstName = "Invalid first name";
    }
    // last name validation
    if (!formData.lastName) {
      errors.lastName = "last name is required";
    } else if (!regexUsername.test(userData.lastName)) {
      errors.lastName = "Invalid last name";
    }
    // email validation
    if (!formData.email) {
      errors.email = "email is required";
    } else if (!regexEmail.test(userData.email)) {
      errors.email = "this email is not valid";
    } else if (message) {
      errors.email = message;
    }
    // password validation
    if (!formData.password) {
      errors.password = "password is required";
    } else if (userData.password.length < 3) {
      errors.password = "password must be more than or equal to 3 characters";
    } else if (userData.password.length >= 12) {
      errors.password = "password cannot be more than 12 characters";
    }

    return errors;
  };
  return (
    <div className="register__container">
      {/* Left image container */}
      <div className="register__containerLeft">
        <img src={registerImage} alt="cycling man" />
      </div>
      {/* Right form container */}
      <div className="register__containerRight">
        <h2>Register</h2>
        {isLoading ? (
          <PulseLoader />
        ) : (
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
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <p>
              Already have an account? <Link to="/login">login</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
