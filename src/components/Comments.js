import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { fetchComments } from "../actions/commentAction";

class Comments extends Component {
  render() {
    const comments = this.props.comments.map(comments => {
      const postID = this.props.postID;
      if (comments.postId === postID) {
        return (
          <div className="comment">
            <h4>{comments.name}</h4>
            <p>{comments.email}</p>
            <p>{comments.body}</p>
          </div>
        );
      }
    });
    return (
      <div>
        <button>Show comments</button>
        {comments}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.posts.comments
});

export default connect(mapStateToProps)(Comments);
