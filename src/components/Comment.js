import React, { Component, PropTypes } from 'react';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    comment: PropTypes.string
  }

  render() {
    return (
      <div className="card col-md-4">
        <div className="inner">
          <div className="comment__name">
            Name: {this.props.name}
          </div>

          <div className="comment__email">
            Email: {this.props.email}
          </div>

          <div className="comment__content">
            Comment: {this.props.comment}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
