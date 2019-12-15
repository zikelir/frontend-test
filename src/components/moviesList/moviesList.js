import React, { Component } from 'react';
import { callMovie } from '../../api/list';
import Header from '../header/header';

class MoviesList extends Component {
    state = {
        movie: ''
    }

    componentDidMount() {
        callMovie();
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div>movieslist</div>
            </div>
          )
    }
}

export default MoviesList;