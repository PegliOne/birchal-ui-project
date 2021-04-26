import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ServiceProvidersHeader = () => {
    return (
      <div class="service-providers-header">
        <h1>Integrations</h1>
        <button>Submit app <FontAwesomeIcon icon={ faPlus }/></button>
      </div>
    )
}

export default ServiceProvidersHeader;
