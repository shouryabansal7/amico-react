import {
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE,
} from '../actions/actioneTypes';

const initalProfileState = {
  user: {},
  error: null,
  success: null,
  inProgress: false,
};
export default function profile(state = initalProfileState, action) {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        success: true,
        user: action.user,
        inProgress: false,
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        inProgress: false,
      };
    case FETCH_USER_PROFILE:
      return {
        ...state,
        inProgress: true,
      };
    default:
      return state;
  }
}
