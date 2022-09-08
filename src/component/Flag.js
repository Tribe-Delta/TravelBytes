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
        // src will be the data that comes, rendered per country
          src='https://flagcdn.com/mt.svg'
          className='img-fluid shadow-2-strong'
          // alt text will be passed by props as an object literal, as `${country} flag`
          alt='this.props.${}'
          padding='0'
          margin='0'
        />
      </Container>
    );
  }
}


export default Flag;