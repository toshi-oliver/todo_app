import React, { useContext, useState } from 'react';
import { CREATE_EVENT} from "../actions"
import AppContext from "../contexts/AppContext"
import { Link } from "react-router-dom"


const EventForm = () => {
  const { dispatch } = useContext(AppContext)
  const [body, setBody] = useState("")
  const [status] = useState("false")

  const addEvent = e => {
    e.preventDefault() //クリックされた際にリロードされることを防ぐ　

    dispatch({
      type: CREATE_EVENT,
      body,
      status
    })
    setBody("")
  }

  const unCreatable = body === "";
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
          disabled={unCreatable}

        >
          登録
        </button>
        <button className="btn btn-pink"><Link to="/"　style={{ textDecoration: 'none' }}>戻る</Link></button>
      </form>
    </>
  )
}

export default EventForm