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
        <Form className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control 
            placeholder="notes" 
            as="textarea" 
            cols={500}
            rows={10}
            class='form-control'
            margin='0'
            margin-top='0'
            padding='0' />
        </Form>
      </Container>
    );
  }
}


export default TextArea;