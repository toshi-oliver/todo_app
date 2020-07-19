import React, { useContext } from "react"

import { DELETE_EVENT } from "../actions"
import AppContext from "../contexts/AppContext"
import API, { graphqlOperation } from '@aws-amplify/api';
import { Button, Table } from 'evergreen-ui'
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
    <Table.Row>
      <Table.TextCell>{event.body}</Table.TextCell>
      <Button appearance="primary" marginRight={12} height={40} iconBefore="trash" intent="danger" onClick={() => handleCompletedDeleteButton(event.id)}>削除</Button>
    </Table.Row>
  )
}

export default CompleteEvent