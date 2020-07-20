import React, { useState } from 'react';
// import { CREATE_EVENT} from "../actions";
// import AppContext from "../contexts/AppContext";
import API, { graphqlOperation } from '@aws-amplify/api';
import { createTodo } from "../graphql/mutations";
import { Button, Textarea } from 'evergreen-ui';


const EventForm = () => {
  // const { dispatch } = useContext(AppContext)
  const [body, setBody] = useState("")
  const [status] = useState("false")

  const addEvent = async (e) => {
    e.preventDefault() //クリックされた際にリロードされることを防ぐ　
    await API.graphql(graphqlOperation(createTodo,  { input: {
      body: body,
      status: status,
      timestamp: Math.floor(Date.now() / 1000),
    }}));
    // dispatch({
    //   type: CREATE_EVENT,
    //   body,
    //   status
    // })
    setBody("")
  }

  const unCreatable = body === "";
  return (
    <>
      <h2>
      POST
      </h2>
      <form>
        <div>
          <Textarea
            placeholder="やることを入力してください"
            value={body}
            onChange={ e => setBody(e.target.value) }
          />
        </div>
        <Button 
          marginRight={12} 
          height={40} 
          appearance="primary"
          intent="none"
          onClick={addEvent}
          disabled={unCreatable}
        >
          登録
        </Button>
        <Button
          is="a" href="/"
          marginRight={12}
          height={40}
          iconBefore="arrow-left">戻る</Button>
      </form>
    </>
  )
}

export default EventForm