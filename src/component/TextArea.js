import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Container>
          <Form 
            onSubmit={(e) => this.props.handleUpdateNote(e, this.props.location)}
            className="mb-3"
          >
            <Form.Group controlId="updateNoteControl">
              <Form.Control _id={this.props.location._id}
              placeholder={this.props.location.notes}
              as="textarea"
              />
              <Button type="submit">
              Save Notes
              </Button>
            </Form.Group>
          </Form>
      </Container>
    );
  }
}


export default TextArea;