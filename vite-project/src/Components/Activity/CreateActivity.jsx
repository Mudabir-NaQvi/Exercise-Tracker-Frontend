import React from 'react'
import "./CreateActivity.css"
import Sidebar from '../Dashboard/Sidebar'
const CreateActivity = () => {
    return (
        <div>
            <div className="main__container">
                {/* side bar */}
                {/* <Sidebar /> */}
                {/* left image container */}
                <div className="left__create__activity__container">
                    <img src="../src/Components/images/running-1.png" alt="create activity image" />
                </div>
                {/* right form container */}
                <div className="right__create__activity__container">

                    <div className="form__container">
                        <h2>Create Activity</h2>
                        <input type="text" name='name' id='name' placeholder='Name' />
                        <input type="text" name='description' id='description' placeholder='Description' />
                        <input type="text" name='type' id='type' placeholder='Type' />
                        <input type="time" name="duration" id="duration" placeholder='Duration' />
                        <input type="date" name="date" id="date" placeholder='Date' />
                        <button type="submit">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateActivity
