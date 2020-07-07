import React from 'react';
import Event from "./Event"

const Events = ({state ,dispatch}) => {
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
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events