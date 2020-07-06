import React from "react"

import { DELETE_EVENT} from "../actions"

const Event = ({event ,dispatch}) => {
  const handleClickDeleteButton = () => {
    const result = window.confirm(`このリストを本当に削除しても良いですか？`)
    if (result) {
      dispatch({ type: DELETE_EVENT, id: event.id })
    }
  }

  return (
    <tr>
      <td>{event.body}</td>
      <td><button type="button" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event