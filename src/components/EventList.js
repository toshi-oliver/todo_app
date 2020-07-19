import React, { useContext } from 'react';
import Event from "./Event";
import AppContext from "../contexts/AppContext";
import Auth from '@aws-amplify/auth';
import { Button } from 'evergreen-ui';
import { Table } from 'evergreen-ui';

const EventList = () => {
  const {state}= useContext(AppContext)
  const incompleteEvent = state.filter((event) => (
    (event.status === "false")))

  const signOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }

    return (
      <>
        <Button marginRight={16} intent="warning" onClick={signOut}>
          ログアウト
        </Button>
        <h2>
          TODO LIST
        </h2>
        <Table>
          <Table.Head>
            <Table.TextHeaderCell>List</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body>
            {incompleteEvent.map((event) => (
            <Table.Row key={event.id}>
              <Table.TextCell>
                <Event event={event} />
              </Table.TextCell>
            </Table.Row>))}
          </Table.Body>
        </Table>
        <Button is="a" href="/new" marginRight={12} height={40} appearance="primary" intent="success">新規作成</Button>
      </>
    )
  }

  export default EventList