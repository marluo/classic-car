import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../components/img/octane.svg';

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      {
        currentUser ?
        <Link className='option' to='/guide'>Price Guide</Link>
        :
        <Link className='option' to='/signin'>Price Guide</Link>
      }
      <Link className="option" to="/market">
        Classics
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        : 
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
