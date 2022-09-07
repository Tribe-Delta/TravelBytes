import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../css/Map.css';


mapboxgl.accessToken = 'pk.eyJ1IjoiZGF3ZXNvbWUxMDEiLCJhIjoiY2w3bDE3dm5mMGc1dTN1cDNycXdmdTQ0MiJ9.OrMfNkMRgODodzN9f15WXw';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    lng: -122.330062, 
    lat: 47.603832,
    zoom: 9
    };
    
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });

    // map.on('style.load', () => {
    //   map.setFog({});
    // });
  }

  render() {
    return (
      <div className='map-cnt'>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export default Map;
// export default withAuth0(Map);
