import React from "react"

const Event = ({event ,dispatch}) => {
  const handleClickDeleteButton = () => {
    dispatch({ type: "DELETE_EVENT", id: event.id })
  }

  return (
    <tr>
      <td>{event.body}</td>
      <td><button type="button" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event