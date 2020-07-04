import React, {useState} from 'react';

import Amplify from '@aws-amplify/core';
import awsmobile from '../aws-exports';

import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsmobile);

 const App = () => {
  return (
    <div className="container-fluid">
      <h2>
        LISTS
      </h2>
      <table>
        <thead>
          <tr>
            <th>Body</th>
          </tr>
        </thead>
      </table>
      <tbody>
        
      </tbody>


    </div>
  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
});