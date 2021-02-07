import { Form, Button, Container  } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';

export const OwnerForm = () => {
  
  
    const [ formValues , handleInputChange, reset] = useForm({
    name: '',
    lastName:'',
    CI:'',
    cellphone: '',
    email: '',
  });
  
    const { name, lastName, CI, cellphone,  email }= formValues;

  return (
    
    <div>
      <Container className=" ownerFormContainer mt-5 ">
        <h1>Registro de propietario</h1>
        <Form>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" value={ name } type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control name="lastName" value={ lastName } type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>CI</Form.Label>
            <Form.Control name="CI" value={ CI } type="text"  />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control  name="cellphone" value={ cellphone } type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Correo</Form.Label>
            <Form.Control name="email" value={ email } type="email" placeholder="" />
          </Form.Group>


          <Button variant="dark" type="submit">
           Crear nuevo propietario
          </Button>
        </Form>
    </Container>
    </div>
  )
}
