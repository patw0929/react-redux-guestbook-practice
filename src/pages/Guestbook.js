import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/Form';
import List from '../components/List';
import * as GuestbookActions from '../actions/guestbookActions';

Parse.initialize('bHklL5yx689gtXtiVySt06QzE5jvhYfFqEb6Ky72', 'FTaXjino70CPq9NGxje50cd9Nm1SzIC1Z2o7K6RI');

class Guestbook extends Component {
  constructor(props) {
    super(props);

    this.retrieveData = this.retrieveData.bind(this);
  }

  static propTypes = {
    data: PropTypes.array,
    dispatch: PropTypes.func
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    this.props.dispatch(GuestbookActions.fetchComments());
  }

  render() {
    const { data, dispatch } = this.props;
    const actions = bindActionCreators(GuestbookActions, dispatch);

    return (
      <div className="guestbook">
        <Form actions={actions} />
        <hr />
        <List items={data} />
      </div>
    );
  }
}

function select(state) {
  return {
    data: state.guestbookData
  };
}

export default connect(select)(Guestbook);
