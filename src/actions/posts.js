import { UPDATE_POSTS } from './actioneTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://localhost:8000/api/v2/posts';
    fetch(url)
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
