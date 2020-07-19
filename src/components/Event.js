import React, {useContext }from "react"

import { COMPLETE_EVENT, DELETE_EVENT } from "../actions"
import AppContext from "../contexts/AppContext"
import API, { graphqlOperation } from '@aws-amplify/api';
import { updateTodo,deleteTodo } from '../graphql/mutations';
import { Button, Table } from 'evergreen-ui'

const Event = ({event}) => {
  const { dispatch } = useContext(AppContext)
  const handleClickDeleteButton = async (evenId) => {
    const confirmation = window.confirm(`このリストを本当に削除しても良いですか？`)
    if (confirmation) {
      await API.graphql(graphqlOperation(deleteTodo, { input: {
        id: evenId }
      }));
      dispatch({ type: DELETE_EVENT, id: event.id })
    }
  }

  const handleClickCompleteButton = async (evenId) => {
    await API.graphql(graphqlOperation(updateTodo, { input: { id: evenId,
      status: "true" }}));
    dispatch({ type: COMPLETE_EVENT, id: event.id })
  }

  return (
    <Table.Row>
      <Table.TextCell>{event.body}</Table.TextCell>
      <Button marginRight={12} height={40} appearance="primary" intent="none" onClick={() => handleClickCompleteButton(event.id)}>完了</Button>
      <Button marginRight={12} height={40} appearance="primary" iconBefore="trash" intent="danger" onClick={() => handleClickDeleteButton(event.id)}>削除</Button>
    </Table.Row>
  )
}

export default Event