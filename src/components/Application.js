import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Application.scss';

class Application extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    location: PropTypes.object
  }

  render() {
    return (
      <div>
        <div>
          <ul className="nav nav-tabs">
            <li role="presentation" className={this.props.location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
            <li role="presentation" className={this.props.location.pathname === '/' ? 'active' : ''}><Link to="/">Guestbook</Link></li>
          </ul>
        </div>

        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Application;
