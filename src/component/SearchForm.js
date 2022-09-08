import React from "react";
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

class SearchForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      listItems: [],
      baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
      searchType: '.json?types=place&access_token=',
    }
  }

  handleOnChange = async(event) => {
    const url = `${this.state.baseURL}${event.target.value}${this.state.searchType}${process.env.REACT_APP_MAPBOX_API_PUBLIC_KEY}`;
    let axResponse = await axios.get(url);

    let filteredList = [];

    filteredList = axResponse.data.features.map((searchResult) => {
        return searchResult;
      });

    filteredList.length ? this.setState({listItems: filteredList}) : this.setState({listItems: []}); 
  }

  handleListItemClick = async(event) => {
    // console.log('Location Clicked: ', event.target.attributes.cityname.textContent);
    // console.log('ListItems:', this.state.listItems);
    event.preventDefault();

    // this.setState = ({
    //   cityName: event.target.attributes.cityname.textContent
    // });

    this.props.updateSelectedCity(event.target.attributes.cityname.textContent);

    this.props.updateMap(
      event.target.attributes.lng.value, 
      event.target.attributes.lat.value
    );
  }

  render(){
    let list = this.state.listItems.map((li, idx) => 
      <ListGroup.Item 
      key={idx} 
      lng={li.center[0]} 
      lat={li.center[1]}
      cityName={li.place_name}
      action onClick={this.handleListItemClick}
      >
        {li.place_name} 
      </ListGroup.Item>
    );

    return(
      <div className="master-form">
        <Form>
          <Form.Control size="lg" type="text" placeholder="Large text" onChange={this.handleOnChange} />
        </Form>

        {this.state.listItems.length ? (
          <ListGroup>
            {list}
          </ListGroup>
        ) : ( 
          <h3>No Searches</h3>
        )}
      </div>
    )
  }
}

export default SearchForm;