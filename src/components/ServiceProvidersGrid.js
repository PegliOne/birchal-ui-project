import React, {Component} from 'react';

import InstallationButton from './InstallationButton.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faEllipsisH, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import serviceProviders from '../data/service-providers'

class ServiceProvidersGrid extends Component {
  constructor(){
    super();
    this.state = {
      serviceProviders: serviceProviders
    }

    this._changeInstallationState = this._changeInstallationState.bind(this);
  }

  _changeInstallationState(event) {
    const index = event.target.id
    const serviceProviders = this.state.serviceProviders;
    // This if statement was added to fix an error caused by clicking "install" before the service provider data had loaded
    if (serviceProviders[index]) {
        serviceProviders[index].isInstalled = true;
    }
    this.setState({serviceProviders});
  }

  render() {

    return (
      <div class="service-providers-grid">
        {this.state.serviceProviders.map(function(item, index){
          return (
            <section key={ item.name } >
              <div>
                <FontAwesomeIcon icon={ faSync }/>
                <FontAwesomeIcon icon={ faEllipsisH }/>
              </div>
              <div>
                <img src={ item.logo }></img>
                {item.isInstalled && <span> <FontAwesomeIcon icon={ faCheckCircle }/>Installed</span>}
                {item.isInstalled === false && <button onClick={ this._changeInstallationState } id={ index }> <FontAwesomeIcon icon={ faPlus }/> Install</button>}
              </div>
              <div>
                <h3>{ item.name }</h3>
                <p>{ item.subtitle }</p>
              </div>
            </section>
          );
        }.bind(this))}
      </div>
    )
  }

}

export default ServiceProvidersGrid;
