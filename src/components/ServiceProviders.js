import React, {Component} from 'react';
import ServiceProvidersHeader from './ServiceProvidersHeader';
import ServiceProvidersGrid from './ServiceProvidersGrid';

class ServiceProviders extends Component {

  render() {
    return (
      <div class="service-providers-container">
        <ServiceProvidersHeader/>
        <ServiceProvidersGrid/>
      </div>
    )
  }

}

export default ServiceProviders;
