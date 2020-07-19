import React, { useContext } from 'react';
import CompleteEvent from "./CompleteEvent";
import AppContext from "../contexts/AppContext";
import { Table } from 'evergreen-ui';


const CompleteList = () => {
  const {state}= useContext(AppContext)
  const completeEvent = state.filter((event) => (
    (event.status === "true")))

    return (
    <>
      <h2>
      COMPLETED
      </h2>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Completed</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body>
            {completeEvent.map((event,index) => (
            <Table.Row key={index}>
              <Table.TextCell>
                <CompleteEvent event={event} />
              </Table.TextCell>
            </Table.Row>))}
        </Table.Body>
      </Table>
    </>
  )
}
export default CompleteList
