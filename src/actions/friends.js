import { APIurls } from '../helper/urls';
import { getAuthTokenFromLocalStorage } from '../helper/utils';
import { FETCH_FRIENDS_SUCCESS } from './actioneTypes';

export function fetchUserFriends(userId) {
  return (dispatch) => {
    const url = APIurls.userFriends(userId);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        dispatch(fetchFriendsSucces(data.friends));
      });
  };
}

export function fetchFriendsSucces(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}
