import React from "react";
import axios from 'axios';
import {withAuth0} from '@auth0/auth0-react';
class Content extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    if(this.props.auth0.isAuthenticated){
      const res = await this.props.auth0.getIDTokenClaims();
      const jwt = res.__raw;


      //Use this to get token for thunderclient
      console.log('token: ', jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/authtest'
      }

      const authtestResponse = await axios(config);

      console.log('Response: ', authtestResponse.data);

      this.setState({
        items: authtestResponse.data
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

export default withAuth0(Content);