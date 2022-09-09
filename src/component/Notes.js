import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LocationSavedModal from './LocationSavedModal.js'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../css/Notes.css';

class Notes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showSaveLocationModal: false
    };
  }

  handleSaveLocationModal = (showModal) => {
    this.setState({
      showSaveLocationModal: showModal
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try{
      if(this.props.auth0.isAuthenticated){
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
  
        let postPacket = {
          cityName: this.props.cityName,
          notes: event.target.elements.formNotes.value
        }

        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
          method: 'POST',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/location',
          data: postPacket
        }

        await axios(config);

        this.handleSaveLocationModal(true);

        this.props.getSavedLocations();
      }
    } catch(error) {
      console.log('error in handleSubmit', error.response);
    }
  }

  render(){
    return(
      <>
        <LocationSavedModal 
          showSaveLocationModal={this.state.showSaveLocationModal} 
          handleSaveLocationModal={this.handleSaveLocationModal}
        />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="text" placeholder="Add notes for this location:" />
            <Form.Text className="text-muted">
              Keep track of any location specifics you want to remeber.
            </Form.Text>
          </Form.Group>
          <button className="notes-button" type="submit">
            Save Location
          </button>
        </Form>
      </>
    )
  }
}

export default withAuth0(Notes);