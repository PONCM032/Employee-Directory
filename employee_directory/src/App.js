import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Searchbar from './components/searchbar';
import Table from "./components/table";
import API from "./utils/API";

class App extends Component {

  state = {
    unfilterEe: {},
    filterEe: {}
  }

  componentDidMount() {
    this.searchPeople();
  }

  searchPeople = query =>{
    
  }

  render() {
    return (
      <div>
        <Navbar />
        <Searchbar />
        <Table />
      </div>

    )
  };
};

  export default App;
