import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form className="mb-3">
              <Form.Control 
              placeholder="notes" 
              as="textarea" 
              cols={500}
              rows={10}
              className='form-control'
              margin='0'
              margin-top='0'
              padding='0' />
          </Form>
        </Form.Group>
      </Container>
    );
  }
}


export default TextArea;