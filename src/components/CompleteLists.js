import React, { useContext } from 'react';
// import CompleteEvent from "./CompleteEvent"
import AppContext from "../contexts/AppContext"

const CompleteLists = () => {
  const {state}= useContext(AppContext)
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
          {state.filter((event, index) => {
            return ( event.status === "true"?
              <tr>
                <td>{event.body}</td>
                {/* <td><button type="button" onClick={handleClickDeleteButton}>削除</button></td> */}
              </tr>
            : false);
          })}
        </tbody>
      </table>
    </>
  )
}

export default CompleteLists
