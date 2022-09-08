import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import RenderMap from './RenderMap.js'; 
import Flag from './Flag.js';
import TextArea from './TextArea.js';
import "./PlaceCard.css";
// import axios from 'axios';

class PlaceCard extends React.Component {
  




  render() {
    return (
      <div className="content-container">
      <div className="row">
          <div className="left-panel box">
              <h3>{this.props.location.city}, {this.props.location.state}, {this.props.location.country}</h3>
              <ul>
                <li>Timezone: {this.props.location.timezone}</li>
                <li>Currency: {this.props.location.currencySymbol}, {this.props.location.currency}</li>
                <li>Languages: {this.props.location.firstLanguage}, {this.props.location.secondLanguage}</li>
              </ul>
              <Flag 
              flagLocation={this.props.location.flag}
              />
          </div>
          <div className="middle-panel box">
              <Container>
                <RenderMap 
                mapLocation={this.props.location}
                />
              </Container>
          </div>
          <div className="right-panel box">
              <Container style={{ display: "inline" }}>
                <Button 
                  onClick={ () => this.props.handleLocationDelete(this.props.location)}>Delete Location
                </Button>
              </Container>
              <Container style={{ display: "inline" }}>
                <Button 
                  onClick={ () => this.props.handleUpdateNote(this.props.location)}>Save Note
                </Button>
              </Container>
              <TextArea  />
          </div>
     </div>
  </div>
        
        
      //   <Container className="content-container">
      //   <Row className="row">
          
      //     <LocationList className="left-panel"/>
      //     <RenderMap className="middle-panel"/>
      //     <TextArea className="right-panel"/>
         
      //   </Row>
      // </Container>

    );
  }
}


// export default function App() {
//   return (
//   );
// }

// const Comp1 = () => {
//   return <Col md={1}>Hello world</Col>;
// };

// const Comp2 = () => {
//   return <Col md={11}>Foobar</Col>;
// };

export default PlaceCard;