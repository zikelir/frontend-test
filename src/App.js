import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import MoviesList from './components/moviesList/moviesList';
import CategoriesList from './components/categoriesList/categoriesList';


class App extends Component {
  state = {
    firstTimeLogin: '',
  }

  componentDidMount() {
    if(!localStorage.firstTimeLogin) {
      localStorage.setItem('firstTimeLogin', true);
      this.setState({firstTimeLogin: true})
    }
  }

  render() {
    return (
      <div>

        {/* {
          this.state.firstTimeLogin === true
            ? <CategoriesList />
            : <div>
              <Header></Header>
              <MoviesList />
            </div>
        } */}
        <CategoriesList></CategoriesList>
      </div>
    );
  }
}

export default App;
