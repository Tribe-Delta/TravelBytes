import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class Flag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Container>
        <Image
          src={this.props.flagLocation}
          className='img-fluid shadow-2-strong'
          alt='this.props.${}'
          padding='0'
          margin='0'
        />
      </Container>
    );
  }
}


export default Flag;