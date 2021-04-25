import React, {Component} from 'react';

import sidebarLinks from '../data/sidebar-links'

class Sidebar extends Component {

  render() {
    return (
      <nav class="sidebar">
        <h2>Categories</h2>

        <ul>
          {sidebarLinks.map(function(item){
            return <a href="#">{ item }</a>;
          })}
        </ul>
      </nav>
    )
  }

}

export default Sidebar;
