export function callMovieShort(movieName) {
    const resp = fetch(`http://www.omdbapi.com/?t=${movieName}&plot=short&apikey=886580cf`)
            .then((res) =>
                res.json()
            )
            .then((data) => {
                return data;
            })
            .catch(console.log, ' api error');
        return resp;
};

