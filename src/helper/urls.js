const API_ROOT = 'http://localhost:8000/api/v2';

export const APIurls = {
  login: () => `${API_ROOT}/users/create-session`,
  signup: () => `${API_ROOT}/users/create`,
  fetchPosts: () => `${API_ROOT}/posts`,
  editProfile: () => `${API_ROOT}/users/edit`,
};
