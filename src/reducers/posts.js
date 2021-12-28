import {
  UPDATE_POSTS,
  ADD_POST,
  ADD_COMMENT,
  UPDATE_POST_LIKE,
} from '../actions/actioneTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    case ADD_COMMENT:
      const newPosts = state.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }

        return post;
      });
      return newPosts;
    case UPDATE_POST_LIKE:
      let updatedPosts;
      if (action.deleted) {
        updatedPosts = state.map((post) => {
          if (post._id === action.postId) {
            const newLikes = post.likes.filter((l) => l._id !== action.likeId);
            return {
              ...post,
              likes: newLikes,
            };
          }

          return post;
        });
      } else {
        updatedPosts = state.map((post) => {
          if (post._id === action.postId) {
            return {
              ...post,
              likes: [...post.likes, action.likeId],
            };
          }

          return post;
        });
      }
      return updatedPosts;
    default:
      return state;
  }
}
