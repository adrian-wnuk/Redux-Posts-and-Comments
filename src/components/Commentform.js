import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../actions/postActions";

export class Commentform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const comment = {
      postId: this.props.postID,
      id: 111,
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    };

    console.log(comment);
    this.props.addComment(comment);
  }

  render() {
    return (
      <form
        className={`Comment-form Comment-form-${this.props.postID}`}
        onSubmit={this.onSubmit}
      >
        <div>
          <p>Add comment: </p>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Commentform.propTypes = {
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ addedComments: state.posts.addedComments });

export default connect(
  mapStateToProps,
  { addComment }
)(Commentform);
