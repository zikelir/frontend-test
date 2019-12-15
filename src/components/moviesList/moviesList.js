import React from 'react';
import { callMovieShort } from '../../api/list';
import Header from '../header/header';
import './movies-list.css';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            movie: '',
            actionArr: ['Deadpool', 'X-men', 'Dragon Ball'],
            movies: []
        }
      }

    componentDidMount() {
        this.getPathName();
        this.createMovieList();
    }

    getPathName() {
       const pathName = window.location.pathname.split('/movies/');
       const path = pathName[1];
       this.setState({category: path});
    }

    createMovieList() {
        const movArr = [];
            this.state.actionArr.map((item, index) => {
               callMovieShort(item).then((data) => { movArr.push(JSON.stringify(data))});
               console.log(movArr, 'movaarrr');
               this.setState({movies: movArr});
            });     
    }

    render() {
        return (
            <div className="movies">
                <Header></Header>
                <div className="movies-list-container">
                    <div className="page-title">{this.state.category} Movies</div>
                    {/* {
                        this.state.movies.length !==0 ? this.state.movies.map((item, index) => {
                            console.log(item, 'exec???');
                            return <div>Movie {index} {item[index]}</div>
                        }) : <div>No Data</div>
                    } */}
                    <div>{JSON.stringify(this.state)}</div>
                </div>
            </div>
          )
    }
}

export default MoviesList;