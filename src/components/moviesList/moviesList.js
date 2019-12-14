import React, { Component } from 'react';
import { callMovie } from '../../api/list';

class MoviesList extends Component {
    state = {
        movie: ''
    }

    componentDidMount() {
        // fetch('http://www.omdbapi.com/?t=Lord of the rings&plot=full&apikey=886580cf')
        //     .then(res => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         this.setState({movie: JSON.stringify(data)});
        //     })
        //     .catch(console.log)
        callMovie();
    }

    render() {
        return (
            <div>
              {this.state.movie}
            </div>
          )
    }
}

export default MoviesList;