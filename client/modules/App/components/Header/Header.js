import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


export function Header(props, context) {
  return (
    <div >
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Test APP</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className={context.router.isActive('/', true) ? 'active' : ''}><Link to="/" className={context.router.isActive('/', true) ? 'active' : ''} >Home</Link></li>
            <li className={context.router.isActive('/register', true) ? 'active' : ''}><Link to="/register" className={context.router.isActive('/register', true) ? 'active' : ''} >Register</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
};

export default Header;
