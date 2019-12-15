import React, { Component } from 'react';
import { callMovie } from '../../api/list';
import Header from '../header/header';
import './movies-list.css';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ''
        }
      }

    componentDidMount() {
        // callMovie();
    }

    render() {
        console.log(this.props.category, ' cat');
        return (
            <div className="movies">
                <Header></Header>
                <div className="movies-list-container">
                    <div>{JSON.stringify(this.props.category)}</div>
                </div>
            </div>
          )
    }
}

export default MoviesList;