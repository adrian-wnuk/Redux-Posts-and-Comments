import { FETCH_POSTS, FETCH_COMMENTS, ADD_COMMENT } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const fetchComments = postID => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
    .then(response => response.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

export const addComment = commentData => dispatch => {
  console.log(`add comment action: ${commentData}`);
  dispatch({
    type: ADD_COMMENT,
    payload: commentData
  });
};
