import React, { useReducer, useState } from 'react';

import reducer from "../reducers/"
import Amplify from '@aws-amplify/core';
import awsmobile from '../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsmobile);

 const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [body, setBody] = useState("")
  // const [status, setStatus] = useState("false")

  const addEvent = e => {
    e.preventDefault() //クリックされた際ににリロードされることを防ぐ　

    dispatch({
      type: "CREATE_EVENT",
      body,
    })

    setBody("")
  }


  return (
    <>
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
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              id="formEventBody"
              value={body}
              onChange={ e => setBody(e.target.value) }
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={addEvent}
          >
            イベントを作成する
          </button>
        </form>
        {/* <tbody>
        </tbody> */}
      </div>
    </>
  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
});