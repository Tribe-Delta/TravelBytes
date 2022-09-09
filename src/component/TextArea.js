import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/TextArea.css';

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
            <Form.Group 
              controlId="updateNoteControl"
            >
              <Form.Control 
                rows={10}
                _id={this.props.location._id}
                className='form-control'
                as="textarea"
                defaultValue={this.state.message}
                onChange={ () => this.handleChange()}
              />
              <Button className='note-button' type="submit">
              Save Notes
              </Button>
            </Form.Group>
          </Form>
      </Container>
    );
  }
}


export default TextArea;