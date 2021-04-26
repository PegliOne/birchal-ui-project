import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faBell } from '@fortawesome/free-solid-svg-icons';
import mainNavbarLinks from '../data/main-navbar-links'

class MainNavbar extends Component {

  render() {
    return (
      <nav class="main-navbar">
        <button> Logo </button>
        <ul class="main-links">
          {mainNavbarLinks.map(function(item){
            return <a href="#">{ item }</a>;
          })}
        </ul>
        <ul class="main-icons">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCog} />
          <FontAwesomeIcon icon={faBell} />
          <img src="headshot.jpeg"></img>
        </ul>
      </nav>
    )
  }

}

export default MainNavbar;
