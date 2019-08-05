import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchComments } from "../actions/postActions";

import Commentform from "./Commentform";
import Loader from "./Loader";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();

    // show comments
    this.props.fetchComments(this.props.postID);

    //hide show comments button
    const buttonElement = document.getElementsByClassName(
      `button-${this.props.postID}`
    );
    buttonElement[0].style.display = "none";

    //show add comment form
    const commentForm = document.getElementsByClassName(
      `Comment-form-${this.props.postID}`
    );
    commentForm[0].style.display = "inline";

    //hide loader
    const loader = document.getElementsByClassName(
      `loader-${this.props.postID}`
    );
    loader[0].style.display = "none";
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
        <Loader postID={this.props.postID} />
        {comments}
        <Commentform postID={this.props.postID} />
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
