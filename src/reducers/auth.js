import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  CLEAR_AUTH_STATE,
  EDIT_USER_FAILED,
  EDIT_USER_SUCCESSFUL,
} from '../actions/actioneTypes';

const initialAuthState = {
  user: {},
  isLoggedIn: false,
  error: null,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        inProgress: false,
        error: null,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
        error: false,
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
