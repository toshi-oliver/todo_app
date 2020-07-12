import React, { useContext } from 'react';
// import CompleteEvent from "./CompleteEvent"
import AppContext from "../contexts/AppContext"

const CompleteList = () => {
  const {state}= useContext(AppContext)
  console.log(state)
  return (
    <>
      <h2>
      COMPLETED
      </h2>
      <table>
        <thead>
          <tr>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {state.filter((event, index) => (
            (event.status === "true"?
              <tr>
                <td>{event.body}</td>
                {/* <td><button type="button" onClick={handleClickDeleteButton}>削除</button></td> */}
              </tr>
            : false)))}
        </tbody>
      </table>
    </>
  )
}
export default CompleteList
