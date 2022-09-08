import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import SearchForm from './SearchForm.js';
import Notes from './Notes.js';
import '../css/Map.css';
import axios from 'axios';


mapboxgl.accessToken = 'pk.eyJ1IjoiZGF3ZXNvbWUxMDEiLCJhIjoiY2w3bDE3dm5mMGc1dTN1cDNycXdmdTQ0MiJ9.OrMfNkMRgODodzN9f15WXw';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.330062, 
      lat: 47.603832,
      zoom: 9,
      cityName: ''
    };
    
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom,
    });

    // Clean up on unmount
    // return () => map.remove();
  }

  updateMap = (lng, lat) => {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: this.state.zoom,
    });
  }

  updateSelectedCity = (cityName) =>{
    console.log(cityName);
    this.setState({
      cityName: cityName
    });
  }
  // handleCreateLocation = async (mapData) => {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_SERVER}/mapdata`, mapData);
  //     const newLocation = response.data;
  //     //this.props.updateBookState(newLocation);
  //   } catch (error){
  //     console.log('Error when posting mapdata: ', error.response)
  //   }
  // };

  render() {
    return (
      <div className='map-cnt'>
        <SearchForm updateMap={this.updateMap} updateSelectedCity={this.updateSelectedCity}/>
        <div ref={this.mapContainer} className="map-container" />
        <Notes cityName={this.state.cityName} />
      </div>
    );
  }
}

export default Map;
// export default withAuth0(Map);
