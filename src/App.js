import React, { Component, PropTypes } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
)(createStore);

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  render() {
    const { history } = this.props;
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
