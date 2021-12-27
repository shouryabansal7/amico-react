const API_ROOT = 'http://localhost:8000/api/v2';

export const APIurls = {
  login: () => `${API_ROOT}/users/create-session`,
  signup: () => `${API_ROOT}/users/create`,
  fetchPosts: () => `${API_ROOT}/posts`,
  editProfile: () => `${API_ROOT}/users/edit`,
  userProfile: (userId) => `${API_ROOT}/users/${userId}`,
  userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
  addFriends: (userId) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
  removeFriends: (userId) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
  createPost: () => `${API_ROOT}/posts/create`,
  createComment: () => `${API_ROOT}/comments/`,
};
