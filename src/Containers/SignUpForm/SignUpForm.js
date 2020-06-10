import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import LabelInput from './../../Components/LabelInput'

import { signup } from './../../Actions/Users'

import './SignUpForm.scss';

export function SignUpForm() {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => {
    dispatch(signup(data));
  };

  return (
    <div className="signup-form">
      <div className="signup-form_container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="col-md-12">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign Up</h3>
                <div className="form-group">
                  <LabelInput 
                    label={'Email'} 
                    type={'email'} 
                    name={'email'}   
                    register={register({
                      required: "You must specify an email"
                    })}
                    errors={errors}
                  />
                </div>
                <div className="form-group">
                  <LabelInput 
                    label={'Password'} 
                    type={'password'} 
                    name={'password'}   
                    register={register({
                      required: "You must specify a password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                      }
                    })}
                    errors={errors}
                  />
                </div>
                <div className="form-group">
                  <LabelInput 
                    label={'Password Confirmation'} 
                    type={'password'} 
                    name={'password_confirmation'}   
                    register={register({
                      validate: value =>
                        value === password.current || "The passwords do not match"
                    })} 
                    errors={errors}
                  />
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" className="btn signup-form_container--btn" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;