import React, { useContext } from 'react';
import Event from "./Event"
import AppContext from "../contexts/AppContext"

const Events = () => {
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
    </>
  )
}

export default Events