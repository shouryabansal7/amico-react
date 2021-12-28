import { FETCH_SEARCH_RESULTS_SUCCESS } from './actioneTypes';
import { getAuthTokenFromLocalStorage } from '../helper/utils';
import { APIurls } from '../helper/urls';

export function searchUsers(searchText) {
  return (dispatch) => {
    const url = APIurls.userSearch(searchText);
    console.log('reached');
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((repsonse) => repsonse.json())
      .then((data) => {
        console.log('search data', data);
        if (data.success) {
          dispatch(searchResultsSuccess(data.data.users));
        } else {
          dispatch(searchResultsSuccess([]));
        }
      });
  };
}

export function searchResultsSuccess(users) {
  return {
    type: FETCH_SEARCH_RESULTS_SUCCESS,
    users,
  };
}
