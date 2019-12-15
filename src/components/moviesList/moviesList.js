import React from 'react';
import { callMovieShort } from '../../api/list';
import Header from '../header/header';
import MovieCard from '../movieCard/movieCard';
import './movies-list.css';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            category: '',
            actionArr: ['Deadpool', 'X-men', 'Dragon Ball', 'Thor', 'Spider-man'],
            adventureArr: ['The mummy', 'The matrix', 'Aquaman'],
            comedyArr: ['Best in Show', 'The Hat', 'The Beach Bum'],
            fantasyArr: ['The lord of the rings', 'Jumanji', 'Hobbit'],
            movies: [],
            colapseInfo: true,
        }
      }

    componentDidMount() {
        this.getPathName();
    }

    getPathName() {
       const pathName = window.location.pathname.split('/movies/');
       const path = pathName[1];  
       this.setState({category: path})
       const moviesArr = [];
       var categoryArr = [];
        
       categoryArr = this.selectedCategory(path);
       categoryArr.map((item, index) => {
               this.getMovieData(item).then((data) => {
                   moviesArr.push(data);
                   this.setState({movies: moviesArr})
                   return moviesArr;
               }).catch((error) => {
                   console.log(error);
               });
           });
    }

    getMovieData(name) {
        return callMovieShort(name).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });  
    }

    selectedCategory(category) {
        if(category === 'Action') {
            return this.state.actionArr;
        }

        else if (category === 'Adventure') {
            return this.state.adventureArr;
        }

        else if (category === 'Comedy') {
            return this.state.comedyArr;
        }

        else if (category === 'Fantasy') {
            return this.state.fantasyArr;
        }
    }

    render() {

        return (
            <div className="movies">
                <Header></Header>
                <div className="movies-list-container">
                    <div className="page-title">Recommended {this.state.category} Movies</div>
                    <div className="movies-cards">
                        {
                            this.state.movies.length !== 0 ? this.state.movies.map((item, index) => {
                            return <div className="card-poster">
                                        <MovieCard movie={item} category={this.state.category} index={index}></MovieCard> 
                                    </div>
                            }) : <div>No movies </div>
                        }
                    </div>
                </div>
            </div>
          )
    }
}

export default MoviesList;