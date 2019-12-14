import React, { Component } from 'react';
import { callMovie } from '../../api/list';

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
              movieslist
            </div>
          )
    }
}

export default MoviesList;