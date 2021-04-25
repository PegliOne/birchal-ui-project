import React, {Component} from 'react';
import ServiceProvidersHeader from './ServiceProvidersHeader';
import ServiceProvidersGrid from './ServiceProvidersGrid';

class ServiceProviders extends Component {

  render() {
    return (
      <div>
        <ServiceProvidersHeader/>
        <ServiceProvidersGrid/>
      </div>
    )
  }

}

export default ServiceProviders;
