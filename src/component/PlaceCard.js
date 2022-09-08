import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import RenderMap from './RenderMap.js';
import Flag from './Flag.js';
import TextArea from './TextArea.js';
import "../css/PlaceCard.css"

class PlaceCard extends React.Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="left-panel box">
                <h3>Valetta, Malta</h3>
                <ul>
                  <li>`timezone: $timezone`</li>
                  <li>`$currencySymbol $currencyName`</li>
                  <li>`$firstLanguage`</li>
                  <li>`$secondLanguage`</li>
                </ul>
                <Flag />
            </div>
            <div className="middle-panel box">
                <Container>
                  <RenderMap />
                </Container>
            </div>
            <div className="right-panel box">
                <div>
                  <TextArea className='note-box'  />
                </div>
                
                <div className='button-box'>
                  <Button className='note-button'>Save Note</Button>
                  <Button className='note-button'>Delete Location</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PlaceCard;