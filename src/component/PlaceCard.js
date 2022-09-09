import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import RenderMap from './RenderMap.js'; 
import Flag from './Flag.js';
import TextArea from './TextArea.js';
import "../css/PlaceCard.css"

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
                <div>
                  <TextArea 
                    className='note-box'
                    location={this.props.location}
                    handleUpdateNote={this.props.handleUpdateNote}
                    />
                </div>
                <div className='button-box'>
                  <Button className='note-button'onClick={ () => this.props.handleLocationDelete(this.props.location)}>Delete Location</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PlaceCard;