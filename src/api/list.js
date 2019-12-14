export const callMovie = () => {
    fetch('http://www.omdbapi.com/?t=Lord of the rings&plot=full&apikey=886580cf')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                // this.setState({movie: JSON.stringify(data)});
            })
            .catch(console.log);
};

// export callMovie;