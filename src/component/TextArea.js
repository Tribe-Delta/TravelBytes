import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.location.notes
    };
  }

  handleChange = event => {
    this.setState({message: event.target.value})
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
              defaultValue={this.state.message}
              onChange={ () => this.handleChange()}
              as="textarea" 
              rows={4}
              className='form-control'
              margin='0'
              margin-top='0'
              padding='0'
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