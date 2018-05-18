import axios from 'axios';
//import  { browserHistory} from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types'
const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({
          type: AUTH_USER,
          payload: response.data.user
        });
        localStorage.setItem('token', response.data.token );
        // - Save the JWT token
        // - Redirect to the route '/feature'
        //browserHistory.push('/feature')
      })
      .catch(() => {
        // If request is bad...
        dispatch(authError('Bad login info'))
        // - Show an error to the user

      })



  }

}
export function signupUser({ email, password }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({
          type: AUTH_USER
        })
        localStorage.setItem('token', response.data.token);
        //browserHistory.push('/feature')
      })
      .catch((response, err) => {
        // If request is bad...
        dispatch(authError('erere'))
        // - Show an error to the user

      })
  }
}
export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER}
}