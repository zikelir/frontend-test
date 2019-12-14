import React from 'react';
import './App.css';
import Header from './components/header/header';
import MoviesList from './components/moviesList/moviesList';

function App() {
  return (
    <div>
      <Header></Header>
      <MoviesList></MoviesList>
    </div>
  );
}

export default App;
