import React, { useContext } from 'react';
import CompleteEvent from "./CompleteEvent"
import AppContext from "../contexts/AppContext"

const CompleteList = () => {
  const {state}= useContext(AppContext)
  const completeEvent = state.filter((event) => (
    (event.status === "true")))

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await API.graphql(graphqlOperation(listTodos, {
  //       filter: {
  //         status: {
  //             eq: " true"
  //         }
  //       }
  //     }));
  //     console.log(result);
  //     setCompleted(result.data.listTodos.items)
  //   }
  //   fetchData();
  // }, [state]);

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
            {completeEvent.map((event,index) => (<CompleteEvent key={index} event={event} />))}
        </tbody>
      </table>
    </>
  )
}
export default CompleteList
