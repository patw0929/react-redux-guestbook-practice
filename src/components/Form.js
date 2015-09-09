import React, { Component, PropTypes, findDOMNode } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    actions: PropTypes.object
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = findDOMNode(this.refs.name).value;
    let email = findDOMNode(this.refs.email).value;
    let comment = findDOMNode(this.refs.comment).value;
    this.props.actions.postComment.call(this, name, email, comment);
    document.querySelector('.guestbook__form').reset();
  }

  render() {
    return (
      <form className="guestbook__form form-horizontal">
        <div className="form-group">
          <label htmlFor="name" className="col-md-2 control-label">Name:</label>
          <div className="col-md-10">
            <input ref="name" type="text" id="name" name="name" className="form-control" maxLength="20" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="col-md-2 control-label">Email:</label>
          <div className="col-md-10">
            <input ref="email" type="email" id="email" name="email" className="form-control" maxLength="100" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="col-md-2 control-label">Comment:</label>
          <div className="col-md-10">
            <textarea ref="comment" id="comment" name="comment" className="form-control"></textarea>
          </div>
        </div>

        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <button id="submit" className="btn btn-default" onClick={::this.handleSubmit}>Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
