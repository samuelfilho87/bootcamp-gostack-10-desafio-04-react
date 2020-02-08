import React, { Component } from 'react';

import './Header.css';
import logo from '../assets/commentbook.png';
import userPhoto from '../assets/user-photo.jpeg';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="CommentBook Logo" id="logo"/>

        <span id="perfilHeader">
          <a href="">Meu perfil</a>
          <a href=""><img src={userPhoto} alt="User photo"/></a>
        </span>
      </header>
    );
  }
}

export default Header;