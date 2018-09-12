import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, ROOT_URL} from './types'

export function signinUser({ email, password }) {
  return async (dispatch) => {

    try {
      const response = await axios.post(`${ROOT_URL}/signin`, { email, password });
      dispatch({
        type: AUTH_USER,
        payload: response.data.user
      });
      localStorage.setItem('token', response.data.token );
    } catch (error) {
         dispatch(authError("Login is incorrect. Please try again."))
      }
  }
}

export function signupUser({ email, password }) {
  return  dispatch => {
      axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
          dispatch({type: AUTH_USER});
          localStorage.setItem('token', response.data.token);
        }).catch( err => {
          dispatch(authError(err.response.data.error))
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
