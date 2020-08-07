import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Searchbar from './components/searchbar';
import Table from "./components/table";

function App() {
  return(
  <div>
  <Navbar />
  <Searchbar />
  <Table />
  </div>
  );
}

export default App;
