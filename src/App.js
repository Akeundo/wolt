import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
      searchField: ''
    };
  }

  componentDidMount() {
    
    fetch('https://api.myjson.com/bins/6qrxm')  // using json bin to whole my data externally (biz scenario)
      .then(response => response.json())
      .then(list => this.setState({ restaurants: list }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { restaurants, searchField } = this.state;
    const filteredRestaurants = restaurants.filter(restaurant =>
      restaurant.name[0].toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Helsinki Restaurants</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList restaurants={filteredRestaurants} />
      </div>
    );
  }
}

export default App;