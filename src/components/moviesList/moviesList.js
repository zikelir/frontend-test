import React from 'react';
import { callMovieShort } from '../../api/list';
import Header from '../header/header';
import './movies-list.css';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            actionArr: ['Deadpool', 'X-men', 'Dragon Ball'],
            adventureArr: ['The mummy', 'The matrix'],
            comedyArr: ['Best in Show', 'The Hat'],
            fantasyArr: ['The lord of the rings', 'Jumanji'],
            movies: []
        }
      }

    componentDidMount() {
        this.getPathName();
    }

    getPathName() {
       const pathName = window.location.pathname.split('/movies/');
       const path = pathName[1];  
       const moviesArr = [];
       var categoryArr = [];
       
       categoryArr = this.selectedCategory(path);
       categoryArr.map((item, index) => {
               this.getMovieData(item).then((data) => {
                   console.log(data, ' get movies data');

                   moviesArr.push(data);
                   this.setState({movies: moviesArr})
                   return moviesArr;
               }).catch((error) => {
                   console.log(error);
               });

               console.log(this.state.movies)
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
        console.log(category, 'CAT')
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
                    <div className="page-title">{this.state.category} Movies</div>
                    {
                        this.state.movies.length !== 0 ? this.state.movies.map((item, index) => {
                            return <div>Movie {index} - {JSON.stringify(this.state.movies[index])}</div>
                        }) : <div>No movies </div>
                    }
                </div>
            </div>
          )
    }
}

export default MoviesList;