import React, { useContext } from 'react';
import Event from "./Event"
import AppContext from "../contexts/AppContext"
import { Link } from "react-router-dom"

const EventList = () => {
  const {state}= useContext(AppContext)
  const incompleteEvent = state.filter((event) => (
    (event.status === "false" ? event: false)))
  return (
    <>
      <h2>
      LISTS
      </h2>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {incompleteEvent.map((event, index) => (<Event key={index} event={event} />))}
        </tbody>
      </table>

      <button className="btn btn-pink"><Link to="/new"　style={{ textDecoration: 'none' }}>新規作成</Link></button>
    </>
  )
}

export default EventList