import React, { useContext } from 'react';
import Event from "./Event";
import AppContext from "../contexts/AppContext";
import { Table, Button } from 'evergreen-ui';
import {  AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


const EventList = () => {
  const {state}= useContext(AppContext)
  const incompleteEvent = state.filter((event) => (
    (event.status === "false")))

    return (
      <>
        <AmplifyAuthenticator>
          <div style={{width: "60px"}}>
            <AmplifySignOut buttonText="ログアウト"></AmplifySignOut>
          </div>
        </AmplifyAuthenticator>
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