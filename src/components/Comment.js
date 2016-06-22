import React, { PropTypes } from 'react';
import './Comment.scss';

const Comment = (props) => {
  return (
    <div className="card col-md-4">
      <div className="inner">
        <div className="comment__name">
          Name: {props.name}
        </div>

        <div className="comment__email">
          Email: {props.email}
        </div>

        <div className="comment__content">
          Comment: {props.comment}
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  comment: PropTypes.string,
};

export default Comment;
