import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { postComment } from '../actions/guestbookActions';

class Form extends Component {
  static propTypes = {
    postComment: PropTypes.func,
    resetForm: PropTypes.func,
    handleSubmit: PropTypes.func,
    fields: PropTypes.object,
  };

  onSubmit({ name, email, comment }) {
    this.props.postComment.call(this, name, email, comment);
    this.props.resetForm();
  }

  render() {
    const { handleSubmit, fields: { name, email, comment } } = this.props;

    return (
      <form className="guestbook__form form-horizontal"
        onSubmit={handleSubmit(this.onSubmit.bind(this))} novalidate>
        <div className={`form-group ${name.touched && name.invalid ? 'has-error' : ''}`}>
          <label htmlFor="name" className="col-md-2 control-label">Name:</label>
          <div className="col-md-10">
            <input {...name} type="text" className="form-control" maxLength="20" />
            <div className="help-block">
              {name.touched ? name.error : ''}
            </div>
          </div>
        </div>

        <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
          <label htmlFor="email" className="col-md-2 control-label">Email:</label>
          <div className="col-md-10">
            <input {...email} type="email" className="form-control" maxLength="100" />
            <div className="help-block">
              {email.touched ? email.error : ''}
            </div>
          </div>
        </div>

        <div className={`form-group ${comment.touched && comment.invalid ? 'has-error' : ''}`}>
          <label htmlFor="comment" className="col-md-2 control-label">Comment:</label>
          <div className="col-md-10">
            <textarea {...comment} className="form-control"></textarea>
            <div className="help-block">
              {comment.touched ? comment.error : ''}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

function isEmail(email){
  return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please fill the name';
  }

  if (!values.email) {
    errors.email = 'Please fill the email';
  } else {
    if (!isEmail(values.email)) {
      errors.email = 'E-mail format is incorrect';
    }
  }

  if (!values.comment) {
    errors.comment = 'Please fill the comment';
  }

  return errors;
}

export default reduxForm({
  form: 'guestbook',
  fields: ['name', 'email', 'comment'],
  validate,
}, null, { postComment })(Form);
