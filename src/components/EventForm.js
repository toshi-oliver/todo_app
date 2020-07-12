import React, { useContext, useState } from 'react';
import { CREATE_EVENT} from "../actions"
import AppContext from "../contexts/AppContext"

const EventForm = () => {
  const { dispatch} = useContext(AppContext)
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
      <h2>
      POST
      </h2>
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
          新規作成
        </button>
      </form>
    </>
  )
}

export default EventForm