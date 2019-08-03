import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../actions/postActions";

import Commentform from "./Commentform";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  // show comments and hide button
  onClick(event) {
    event.preventDefault();
    this.props.fetchComments(this.props.postID);
    const buttonElement = document.getElementsByClassName(
      `button-${this.props.postID}`
    );
    buttonElement[0].style.display = "none";
  }

  render() {
    const comments = this.props.comments.map(comments => {
      const postID = this.props.postID;
      if (comments.postId === postID) {
        return (
          <div className="comment" key={(postID, comments.id)}>
            <h4>{comments.name}</h4>
            <p>{comments.email}</p>
            <p>{comments.body}</p>
          </div>
        );
      }
    });
    return (
      <div>
        <button
          className={`button-${this.props.postID}`}
          type="submit"
          onClick={this.onClick}
        >
          Show comments
        </button>
        {comments}
        <Commentform />
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
