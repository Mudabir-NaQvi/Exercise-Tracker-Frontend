import { useState } from "react";

const useValidate = (formData = {}, errors = {}) => {
  const [formErrors, setFormErrors] = useState(errors);
  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.firstName) {
      errors.firstName = "first name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "last name is required";
    }
    if (!formData.email) {
      errors.email = "email is required";
    } else if (!regex.test(userData.email)) {
      errors.email = "this email is not valid";
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
  setFormErrors(validate(formData));
  return [formErrors, setFormErrors];
};

export default useValidate;
