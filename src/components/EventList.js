import React, { useContext } from 'react';
import Event from "./Event"
import AppContext from "../contexts/AppContext"
import { Link } from "react-router-dom"
import Auth from '@aws-amplify/auth';


const EventList = () => {
  const {state}= useContext(AppContext)
  const incompleteEvent = state.filter((event) => (
    (event.status === "false" ? event: false)))

  // // めっちゃ重要
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await API.graphql(graphqlOperation(listTodos, {
  //       filter: {
  //         status: {
  //             eq: "false"
  //         }
  //       }
  //     }));
  //     console.log(result);
  //     setTodos(result.data.listTodos.items)
  //   }
  //   fetchData();
  // }, [state]);

  const signOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }

    return (
      <>
        <h2>
        LISTS
        </h2>
        <button
        onClick={signOut}
      >
        Logout
      </button>
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