import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import './List.scss';

class List extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    items: PropTypes.object
  }

  render() {
    let result = this.props.items.map((item, index) => {
      return (
        <Comment key={index}
                 name={item.name}
                 email={item.email}
                 comment={item.comment} />
      );
    });

    return (
      <div className="guestbook__list">
        <h3>{'Total: ' + this.props.items.length + ' Comments'}</h3>

        <div className="row">
          {result}
        </div>
      </div>
    );
  }
}

export default List;
