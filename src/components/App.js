import React, { useReducer, useState } from 'react';
import Event from "./Event"
import { CREATE_EVENT} from "../actions"
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
      type: CREATE_EVENT,
      body,
    })

    setBody("")
  }


  return (
    <>
      <div className="container">
        <h2>
          LISTS
        </h2>
        <table>
          <thead>
            <tr>
              <th>To Do</th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
          </tbody>
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
      </div>
    </>
  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
});