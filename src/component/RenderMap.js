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
          src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.mapLocation.latitude},${this.props.mapLocation.longitude}&zoom=11`}
          className = 'img-fluid'
          alt = 'this.props.${}'
          margin='0'
          padding='0'
        />
      </>
    );
  }
}

export default RenderMap;