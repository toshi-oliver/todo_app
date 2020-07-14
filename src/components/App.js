import React, { useReducer } from 'react';
import EventIndex from "./EventIndex"
import EventForm from "./EventForm"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers/"
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Amplify from '@aws-amplify/core';
// import awsmobile from '../aws-exports';
// import { withAuthenticator } from '@aws-amplify/ui-react';

// Amplify.configure(awsmobile);

const App = () => {
  // combineReducerによりstateは配列からオブジェクトになる。
  // const initialState = {
  //   events: []
  // }
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{state, dispatch}}>
 
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={EventIndex} />
            <Route exact path="/new" component={EventForm} />
          </Switch>
        </BrowserRouter>
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