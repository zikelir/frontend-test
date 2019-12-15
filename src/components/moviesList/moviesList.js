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
    }

    getPathName() {
       const pathName = window.location.pathname.split('/movies/');
       const path = pathName[1];
       this.setState({category: path});
    }

    getMovieData(name) {
        callMovieShort(name).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });  
    }

    render() {
        return (
            <div className="movies">
                <Header></Header>
                <div className="movies-list-container">
                    <div className="page-title">{this.state.category} Movies</div>
                    {
                        this.state.actionArr.map((item, index) => {
                            return <div>Movie {index} - {JSON.stringify(this.getMovieData(item))}</div>
                        })
                    }
                </div>
            </div>
          )
    }
}

export default MoviesList;