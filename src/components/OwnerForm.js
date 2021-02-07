import { Form, Button, Container  } from 'react-bootstrap';

export const OwnerForm = () => {
  return (
    
    <div>
      <Container className=" ownerFormContainer mt-5 ">
        <h1>Registro de propietario</h1>
        <Form>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>CI</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>


          <Button variant="dark" type="submit">
           Crear nuevo propietario
          </Button>
        </Form>
    </Container>
    </div>
  )
}
