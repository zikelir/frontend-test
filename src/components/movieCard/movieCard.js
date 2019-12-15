import React from 'react';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colapseInfo: true,
        }
      }

    render() {
        const {category, movie, index} = this.props;

        return (
            <React.Fragment>
                <div className={`movie-card ${category}`} style={{backgroundImage: `url(${movie.Poster})`}} key={index} onClick={() => { this.state.colapseInfo === true ? this.setState({colapseInfo: false}) : this.setState({colapseInfo: true}) } }>
                                            <div className="card-title">{movie.Title}</div>
                                        </div>
            { this.state.colapseInfo === false ?
                (<div className={`movie-info`}>
                    <div style={{'fontWeight': 'light', 'paddingTop': '4px'}}><b>Year: </b>{movie.Year}</div>
                    <div style={{'fontWeight': 'light', 'paddingTop': '4px'}}><b>Actors:  </b>{movie.Actors}</div>
                    <div style={{'fontWeight': 'light', 'paddingTop': '4px'}}><b>Genres: </b> {movie.Genre}</div>
                    <div style={{'fontWeight': 'light', 'paddingTop': '4px'}}><b>Plot:  </b>{movie.Plot}</div>
                </div>) : null
            }
            </React.Fragment>
        )
    }

}

export default MovieCard;