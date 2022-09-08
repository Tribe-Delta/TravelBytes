import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../css/RenderMap.css';

class RenderMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <Image
        // src will be the data that comes, rendered per country
        src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=35.9375,14.3754&zoom=11`}
        
         className = 'img-fluid'
        // alt text will be passed by props as an object literal, as `${country} flag`
         alt = 'this.props.${}'
         margin='0'
         padding='0'
         />
      </>
    );
  }
}


export default RenderMap;