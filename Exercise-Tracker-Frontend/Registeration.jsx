import React from 'react'
import './registration.css'

const Registeration = () => {
  return (
    <>
        <div className="mainContainer">
            <div className="imageContainer">
                <img src="../src/assets/registration.jpg" alt="registration form image" className='image'/>
            </div>
            <div className="regForm">
                    <form action="/submit-forn" method="POST">
                        <h1>Register</h1>
                        <input type="text" name='first name' id='first name' placeholder="First name" required/>
                        <input type="text" name='last name' id='last name' placeholder='Last name' required/>
                        <input type="email" name="email" id="email" placeholder='Email' required/>
                        <input type="password" name="password" id="password" placeholder='Password' pattern=".{8,}" title='Password must be at least 8 characters long' required/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
        </div>
    </>
    )
}

export default Registeration