import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../actions/postActions";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick(event, postID) {
    event.preventDefault();

    this.props.fetchComments(postID);
  }

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
        <button type="submit" value={this.props.postID} onClick={this.onClick}>
          Show comments
        </button>
        {comments}
      </div>
    );
  }
}

Comments.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  comments: state.posts.comments
});

export default connect(
  mapStateToProps,
  { fetchComments }
)(Comments);
