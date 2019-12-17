import React from 'react';
import { callMovieShort } from '../../api/list';
// import Header from '../header/header';
import { Link } from "@reach/router";
import MovieCard from '../movieCard/movieCard';
import './movies-list.css';
import './header.css';
import SearchComponent from '../searchComponent/searchComponent';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            category: '',
            categoryMoviesArr: [],
            movies: [],
            colapseInfo: true,
            search: false,
            text: '',
            filteredMovie: []
        }
    }

    componentDidMount() {
        this.getPathName();
    }

    getPathName() {
        const pathName = window.location.pathname.split('/movies/');
        const path = pathName[1];
        this.setState({ category: path });
        const moviesArr = [];
        var categoryArr = [];

        categoryArr = this.selectedCategory(path);
        if(this.state.filteredMovie.length === 0) {
            categoryArr.map((item, index) => {
                this.getMovieData(item).then((data) => {
                    moviesArr.push(data);
                    this.setState({ movies: moviesArr })
                    return moviesArr;
                }).catch((error) => {
                    console.log(error);
                });
            });
        } else {
            this.state.filteredMovie.map((item, index) => {
                this.getMovieData(item).then((data) => {
                    moviesArr.push(data);
                    this.setState({ movies: moviesArr })
                    return moviesArr;
                }).catch((error) => {
                    console.log(error);
                });
            });
        }
        
    }

    getMovieData(name) {
        return callMovieShort(name).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err)
        });
    }

    selectedCategory(category) {
        if (category === 'Action') {
            const actionArr = ['Deadpool', 'X-men', 'Dragon Ball', 'Thor', 'Spider-man'];
            this.setState({ categoryMoviesArr: actionArr });
            return actionArr;
        }  

        else if (category === 'Adventure') {
            const adventureArr = ['The mummy', 'The matrix', 'Aquaman'];
            this.setState({ categoryMoviesArr: adventureArr });
            return adventureArr;
        }

        else if (category === 'Comedy') {
            const comedyArr = ['Best in Show', 'The Hat', 'The Beach Bum'];
            this.setState({ categoryMoviesArr: comedyArr });
            return comedyArr;
        }

        else if (category === 'Fantasy') {
            const fantasyArr = ['The lord of the rings', 'Jumanji', 'Hobbit'];
            this.setState({ categoryMoviesArr: fantasyArr });
            return fantasyArr;
        }
    }

    handleSearch(e) {
        const searchString = e.target.value;
        this.setState({text: searchString});
        const filteredArr = this.state.categoryMoviesArr.filter((item) => {
            return item === searchString;
        });
        this.setState({ filteredMovie: filteredArr });   
        if(e.target.value.length === 0) {
            this.getPathName();
        }    

        if (this.state.categoryMoviesArr === this.state.filteredMovie) {
            console.log('1333');
            this.submitSearch();
        }
    }

    submitSearch() {
        const {filteredMovie, categoryMoviesArr} = this.state;
       const totalArray = categoryMoviesArr;
       if(filteredMovie.length > 0) {
           this.setState({categoryMoviesArr: filteredMovie});
           console.log(filteredMovie, categoryMoviesArr);
           this.getPathName();
       } else {
            this.setState({categoryMoviesArr: totalArray});
            this.getPathName();
       }
    }

    render() {

        return (
            <div className="movies">
                <div className="header-bar">
                    <div className="search-area">
                        <input type="text" placeholder="search" className="search-bar" onChange={(e) => this.handleSearch(e)}  value={this.state.text} ></input>
                        <button className="search-button" onClick={() => {this.submitSearch()}}>Search</button>
                    </div>
                    <Link to="/" className="back-button"> {`<`} Back</Link>
                </div>
                <div className="movies-list-container">
                    <div className="page-title">Recommended {this.state.category} Movies</div>
                    {
                        this.state.search === 'true' ? (
                            <SearchComponent></SearchComponent>
                        ) : (
                                <div className="movies-cards">
                                    {
                                        this.state.movies.length !== 0 ? this.state.movies.map((item, index) => {
                                            return <div className="card-poster">
                                                <MovieCard movie={item} category={this.state.category} key={index}></MovieCard>
                                            </div>
                                        }) : <div>No movies </div>
                                    }
                                </div>
                            )
                    }


                </div>
            </div>
        )
    }
}

export default MoviesList;