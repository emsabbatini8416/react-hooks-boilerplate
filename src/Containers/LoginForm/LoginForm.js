import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import LabelInput from './../../Components/LabelInput'

import { loginToken } from './../../Actions/Users'

import './LoginForm.scss';

export function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = data => {
    dispatch(loginToken(data));
  };

  return (
    <div className="login-form">
      <div className="login-form_container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="col-md-12">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Login</h3>
                <div className="form-group">
                  <LabelInput 
                    label={'Username'} 
                    type={'text'} 
                    name={'username'}   
                    register={register({
                      required: "You must specify an username"
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
                      required: "You must specify a password"
                    })} 
                    errors={errors}
                  />
                </div>
                <div className="form-group">
                    <input type="submit" name="submit" className="btn login-form_container--btn" value="Submit" />
                    <input type="button" name="signup" className="btn" onClick={() => history.push('/signup')} value="Sign Up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;