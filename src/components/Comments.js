import React, { Component } from 'react';
import { fetchComments } from '../actions/commentAction';

export class Comments extends Component {
  
	render() {
		return <button onClick={fetchComments()}>Show comments</button>;
	}
}

export default Comments;
