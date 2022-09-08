import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class Notes extends React.Component{

  handleSubmit = async (event) => {
    event.preventDefault();

    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      // console.log('token for thunderclient: ', jwt);
      
      console.log(event.target.elements.formNotes.value);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/location'
      }

      console.log(this.props.cityName);

      const locationResponse = await axios(
        config,
         {
          cityName: this.props.cityName,
          notes: event.target.elements.formNotes.value
        });
      console.log('Post Response:', locationResponse.data);
    }
  }
// async componentDidMount() {
//     if(this.props.auth0.isAuthenticated){
//       const res = await this.props.auth0.getIdTokenClaims();
//       const jwt = res.__raw;

//       //Use this to get token for thunderclient
//       console.log('token for thunderclient: ', jwt);

//       const config = {
//         headers: { "Authorization": `Bearer ${jwt}` },
//         method: 'get',
//         baseURL: process.env.REACT_APP_SERVER,
//         url: '/location'
//       }
      
//       console.log(config);
//       const locationResponse = await axios(config);

//       console.log('Response: ', locationResponse.data);

//       this.setState({
//         locations: locationResponse.data
//       });
//     }
//   }

  render(){
    return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formNotes">
        <Form.Label>Notes</Form.Label>
        <Form.Control type="text" placeholder="Add notes for this location:" />
        <Form.Text className="text-muted">
          Keep track of any location specifics you want to remeber.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Location
      </Button>
    </Form>
    )
  }
}

export default withAuth0(Notes);