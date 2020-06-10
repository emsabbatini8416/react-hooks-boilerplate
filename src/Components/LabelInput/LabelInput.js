import React from 'react';

export function LabelInput({ label, type, name, register, errors }) {
  return (
    <>
      <label htmlFor={name}>{label}</label><br />
      <input type={type} name={name} className="form-control" ref={register} />
      {errors[name] && errors[name].message}
    </>
  );
}

export default LabelInput;