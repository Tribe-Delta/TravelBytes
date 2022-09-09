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
            onSubmit={this.props.handleUpdateNote}
            className="mb-3"
          >
        <Form.Group controlId="updateNoteControl">
              <Form.Control 
              placeholder="notes" 
              as="textarea" 
              cols={500}
              rows={10}
              className='form-control'
              margin='0'
              margin-top='0'
              padding='0' />
        </Form.Group>
               <Button 
                type="submit"
                className='note-button'
               >Save Note</Button>
          </Form>
      </Container>
    );
  }
}


export default TextArea;