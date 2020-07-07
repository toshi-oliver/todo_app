import React, { useReducer } from 'react';
import Events from "./Events"
import EventForm from "./EventForm"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers/"
// import Amplify from '@aws-amplify/core';
// import awsmobile from '../aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// Amplify.configure(awsmobile);

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container">
        <Events />
        <EventForm />
        <h2>COMPLETED</h2>
      </div>
    </AppContext.Provider>
  );
}
export default App

// export default withAuthenticator(App, {
//   signUpConfig: {
//     hiddenDefaults: ['phone_number']
//   }
// });