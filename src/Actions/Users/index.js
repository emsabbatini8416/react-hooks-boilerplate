import axios from "axios";

const BASE_URL = `https://sandbox.bitex.la/api`
const COOKIE = '';
const API_KEY = 'c7aaed0233eb4998a7d3278c42fd7048a884174f00a7d18fa93a7f9b5ba732b56f5f8fd23c253479';

export const LOGIN = 'LOGIN';
export const SET_USER = 'SET_USER';

export const setLogin = (data) => {
  return {
      type: LOGIN,
      payload: data
  }
}

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export const loginToken = ({ username, password }) => {
    return dispatch => {
      return axios.post(`${BASE_URL}/users/login`, {
            data: {
                type: "sessions", 
                attributes: { 
                    email: username,
                    password: password 
                }
            },
            included:[]
        }, {
            headers: { 'Authorization': `${API_KEY}` },
        })
        .then(response => {
            dispatch(setLogin(response));
        })
        .catch(error => {
          throw(error);
        })
    }
}

export const loginCookie = ({ username, password }) => {
    return dispatch => {
      return axios.post(`${BASE_URL}/users/login`, {
            data: {
                type: "sessions", 
                attributes: { 
                    email: username,
                    password: password 
                }
            },
            included:[]
        }, {
            headers: { 'Cookie': `${COOKIE}` },
            withCredentials: true
        })
        .then(response => {
            dispatch(setLogin(response));
        })
        .catch(error => {
          throw(error);
        })
    }
}

export const signup = ({ email, password, password_confirmation}) => {
    debugger
    return dispatch => {
        return axios.post(`${BASE_URL}/users/sign_up`, {
              data: {
                  type: "registrations", 
                  attributes: { 
                      email: email,
                      password: password ,
                      password_confirmation: password_confirmation 
                  }
              },
              included:[]
          }, {
              headers: { 'Authorization': `${API_KEY}` },
          })
          .then(response => {
              debugger
              dispatch(setUser(response));
          })
          .catch(error => {
            throw(error);
          })
      }
}