import axios from "axios";

const BASE_URL = ``
const COOKIE = '';
const API_KEY = '';

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

export const login = ({ username, password }) => {
    return dispatch => {
      return axios.post(`${BASE_URL}/`, {

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
        return axios.post(`${BASE_URL}/`, {

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