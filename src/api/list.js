export function callMovieShort(movieName) {
    const resp = fetch(`https://www.omdbapi.com/?t=${movieName}&plot=full&apikey=886580cf`)
            .then((res) =>
                res.json()
            )
            .then((data) => {
                return data;
            })
            .catch(console.log, ' api error');
        return resp;
};

