import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import Application from './components/Application';
import * as pages from './pages/index';
import * as reducers from './reducers/index';

const {
  About,
  Guestbook
} = pages;

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() functions
)(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route component={Application}>
        <Route path={`/`} component={Guestbook} />
        <Route path={`/about`} component={About} />
      </Route>
    </Router>
  );
}

function getRootChildren(history) {
  const rootChildren = [
    <Provider key="provider" store={store}>
      {renderRoutes.bind(null, history)}
    </Provider>
  ];

  return rootChildren;
}

class App extends Component {
  constructor() {
    super();
  }

  static propTypes = {
    history: PropTypes.object
  }

  render() {
    const { history } = this.props;
    return (
      <div>{getRootChildren(history)}</div>
    );
  }
}

export default App;
