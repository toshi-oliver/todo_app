import React, { useContext } from 'react';
// import CompleteEvent from "./CompleteEvent"
import AppContext from "../contexts/AppContext"

const CompleteList = () => {
  const {state}= useContext(AppContext)
  console.log(state)
  const completeEvent = state.filter((event) => (
    (event.status === "true" ? event: false)))

  return (
    <>
      <h2>
      COMPLETED
      </h2>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{completeEvent.body}</td>
            <td>{completeEvent.id}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default CompleteList
