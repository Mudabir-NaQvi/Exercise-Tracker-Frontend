import axios from "../../api/axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import "./DeleteModal.css";
function DeleteModal({ setIsShow, setShouldReload, id }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      setShouldReload("random value just to make the component rerender");
      await axios.delete(`activity/${id}`);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    setIsShow(false);
  };
  const handleCancel = () => {
    setIsShow(false);
  };
  return (
    <div className="modal__container">
      <div className="modal">
        <h1>Warning</h1>
        {isLoading && <PulseLoader />}
        <p>Are you sure! Do you want to delete it?</p>
        <div className="buttons">
          <button onClick={handleDelete} className="delete__btn">
            Delete
          </button>
          <button onClick={handleCancel} className="cancel__btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
