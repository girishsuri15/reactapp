import React from 'react';
import { Link } from 'react-router-dom';





const LoggedOutView = props => {
  if (!props.currentUser) {
    return (

    <ul className="nav">
      <li ><Link to="/" className="nav-link">
           Home
          </Link></li>
      <li><Link to="/login" className="nav-link">
            LogIn
          </Link></li>
      <li><Link to="/cart" className="nav-link">
            Cart
          </Link></li>
    </ul>
      
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
          <ul className="nav">
      <li ><Link to="/" className="nav-link">
            Home
          </Link></li>
      <li><Link onClick={() => this.LOGOUT()} className="nav-link">
            SignOut
            </Link>
          </li>
      <li><Link to="/cart" className="nav-link">
           Cart
          </Link></li>
    </ul>

    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default text-success">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toUpperCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default (Header);
