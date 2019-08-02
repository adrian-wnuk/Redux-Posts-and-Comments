import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, fetchComments } from "../actions/postActions";
import Comment from "./Comments";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Comment postID={post.id} />
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  comments: state.posts.comments
});

export default connect(
  mapStateToProps,
  { fetchPosts, fetchComments }
)(Posts);
