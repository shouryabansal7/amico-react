import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../actions/actioneTypes';

const initialAuthState = {
  user: {},
  isLoggedIn: false,
  error: null,
  inProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false,
        error: null,
        isLoggedIn: true,
        user: action.user,
      };
    default:
      return state;
  }
}
