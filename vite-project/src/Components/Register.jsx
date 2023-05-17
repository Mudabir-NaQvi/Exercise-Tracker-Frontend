import React from 'react';
import "./Register.css";
import registerImage from "../images/register.png";
export default function Register() {
  return (
    <div className="register__container">
      <div className="register__containerLeft">
        <img src={registerImage} alt="cycling man" />
      </div>
      <div className="register__containerRight">
        <h2>Register</h2>
        <form className="register__form">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="lastName" placeholder="Last name" />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Submit" />
          <p>Already have an account? login</p>
        </form>
      </div>
    </div>
  );
}
