import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import * as reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
)(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object
  };

  render() {
    const { history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
