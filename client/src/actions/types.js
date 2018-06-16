const AUTH_USER = 'auth_user';
const UNAUTH_USER = 'unauth_user';
const AUTH_ERROR = 'auth_error';
//const ROOT_URL = 'http://localhost:5000';
const ROOT_URL = process.env.NODE_ENV ==="production" ?'https://manacard-server.herokuapp.com': 'http://localhost:4080';

const FETCH_SET = 'FETCH_SET';
const FETCH_SETS = 'FETCH_SETS';
const FETCH_MYSETS = 'FETCH_MYSETS';
const FETCH_MYCARDS = 'FETCH_MYCARDS';

const SET_SORTER = 'SET_SORTER';
const SET_REVERSER = 'SET_REVERSER';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_SET,
  FETCH_SETS,
  FETCH_MYSETS,
  FETCH_MYCARDS,
  SET_SORTER,
  SET_REVERSER,
  SET_VISIBILITY_FILTER,
  ROOT_URL
}
