export async function callMovieShort(movieName) {
    try {
        const resp = await fetch(`http://www.omdbapi.com/?t=${movieName}&plot=short&apikey=886580cf`)
            .then(res => res.json())
            .then((data) => {
                return data
            })
            .catch(console.log, ' api error');

        return resp;
    } catch(err) {
        console.log(err);
    }
    
};

