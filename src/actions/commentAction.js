import { FETCH_COMMENTS } from "./types";

export const fetchComments = postID => dispatch => {
  dispatch({
    type: FETCH_COMMENTS,
    postID
  });
};
