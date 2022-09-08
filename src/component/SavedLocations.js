import React from "react";
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class SavedLocations extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      locations: []
    }
  }

  async componentDidMount() {
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      //Use this to get token for thunderclient
      console.log('token for thunderclient: ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/location'
      }
      
      console.log(config);
      const locationResponse = await axios(config);

      console.log('Response: ', locationResponse.data);

      this.setState({
        locations: locationResponse.data
      });
    }
  }

  render(){
    return(
      <>
        <h1>Auth0</h1>
      </>
    )
  }
}

export default withAuth0(SavedLocations);