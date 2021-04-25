import React, {Component} from 'react';

import MainNavbar from './MainNavbar';
import Sidebar from './Sidebar';
import ServiceProviders from './ServiceProviders';

class ServiceProvidersPage extends Component {

  render() {
    return (
      <div>
        <MainNavbar/>
        <main>
          <Sidebar/>
          <ServiceProviders/>
        </main>  
      </div>
    )
  }

}

export default ServiceProvidersPage;
