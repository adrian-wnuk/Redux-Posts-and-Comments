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

export const addComment = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: ADD_COMMENT,
        payload: comment
      })
    );
  console.log(postID);
};
