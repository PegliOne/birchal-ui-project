import React, {Component} from 'react';

class InstallationButton extends Component {

  render(props) {
    return (
      <button id={this.props.index}>
        Install
      </button>
    )
  }

}

export default InstallationButton;
