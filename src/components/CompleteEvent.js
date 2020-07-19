import React, { useContext } from "react"

import { DELETE_EVENT } from "../actions"
import AppContext from "../contexts/AppContext"
import API, { graphqlOperation } from '@aws-amplify/api';
import { deleteTodo } from '../graphql/mutations';

const CompleteEvent = ({event}) => {
  const { dispatch } = useContext(AppContext)
  const handleCompletedDeleteButton = async (evenId) => {
    const confirmation = window.confirm(`このリストを本当に削除しても良いですか？`)
    if (confirmation) {
      await API.graphql(graphqlOperation(deleteTodo, { input: {
        id: evenId }
      }));
      dispatch({ type: DELETE_EVENT, id: event.id })
    }
  }

  return (
    <tr>
      <td>{event.body}</td>
      <td><button type="button" onClick={() => handleCompletedDeleteButton(event.id)}>削除</button></td>
    </tr>
  )
}

export default CompleteEvent