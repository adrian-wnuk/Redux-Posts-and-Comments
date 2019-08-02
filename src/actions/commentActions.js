import { FETCH_COMMENTS } from "./types";

export const fetchComments = postID => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then(response => response.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        postID,
        comments
      })
    );
};
