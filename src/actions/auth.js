import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from './actioneTypes';
import { APIurls } from '../helper/urls';
import { getFormBody } from '../helper/utils';

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIurls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          console.log('login data', data.user);
          //dispatch action to save the user
          dispatch(loginSuccess(data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
