import React from 'react'
import { Form, Button, Container, Table   } from 'react-bootstrap';
import { OwnerInfoRow } from './OwnerInfoRow';
import {gql} from 'apollo-boost'


export const OwnersInfo = () => {
  
  // const getOwners = gql`
  //  `; 
  
  return (
    <Container className="mt-5">
      <h1>Lista de propietarios</h1>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>CI</th>
            <th>Telefono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
            <OwnerInfoRow/>
        </tbody>
      </Table>


    </Container>
  )
}
