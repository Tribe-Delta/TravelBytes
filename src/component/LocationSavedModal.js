import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class LocationSavedModal extends React.Component{


  render(){
    return(
      <Modal
        show={this.props.showSaveLocationModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Location saved
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={() => this.props.handleSaveLocationModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default LocationSavedModal;