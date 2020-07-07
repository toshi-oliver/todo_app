import React, { useReducer } from 'react';
import Events from "./Events"
import EventForm from "./EventForm"
import reducer from "../reducers/"
// import Amplify from '@aws-amplify/core';
// import awsmobile from '../aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// Amplify.configure(awsmobile);

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container">
      <Events state={state} dispatch={dispatch}/>
      <EventForm state={state} dispatch={dispatch}/>
      <h2>COMPLETED</h2>
    </div>
  );
}
export default App

// export default withAuthenticator(App, {
//   signUpConfig: {
//     hiddenDefaults: ['phone_number']
//   }
// });