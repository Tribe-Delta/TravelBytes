import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class NotesModal extends React.Component{


  render(){
    return(
      <Modal
        show={this.props.showNotesModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your notes have been saved.
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={() => this.props.handleNotesModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default NotesModal;
