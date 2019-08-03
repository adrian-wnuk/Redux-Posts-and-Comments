import { FETCH_POSTS, FETCH_COMMENTS } from "../actions/types";

const initalState = {
  posts: [],
  comments: []
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      };
    default:
      return state;
  }
}
