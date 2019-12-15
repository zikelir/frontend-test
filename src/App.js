import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import './App.css';
import MoviesList from './components/moviesList/moviesList';
import CategoriesList from './components/categoriesList/categoriesList';

const Home = () => <CategoriesList></CategoriesList>
let Movies = () => <MoviesList></MoviesList>


class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <Home path="/" />
        <Movies path="/movies" />
      </Router>
    );
  }
}

export default App;
