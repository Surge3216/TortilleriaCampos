import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const resetInputField = () => {
    setValues("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
    resetInputField()
    
  };

  return {
    onChange,
    onSubmit,
    values
  };
};