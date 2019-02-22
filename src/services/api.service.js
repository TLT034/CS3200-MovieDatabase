/*
 * A single location to obtain routes for the web API
 */


let ApiService = class ApiService {
    constructor() {
        this.apiProtocol = 'https:';
        this.apiHost = 'api.themoviedb.org/3/';
        this.apiKey = 'a748d86cbb5485f3f6132617733954a0';
        this.imgURL = 'https://image.tmdb.org/t/p/w92';
    }

	/*
	* Utility methods/properties
	*/
    get apiLocation() {
        return `${this.apiProtocol}//${this.apiHost}`;
    }

	/*
	* API addresses
	*/
    getMovieDetailsURL(movieID) {
        return `${this.apiLocation}movie/${movieID}?api_key=${this.apiKey}`;
    }

    getPersonDetailsURL(personID) {
        return `${this.apiLocation}person/${personID}?api_key=${this.apiKey}`;
    }

    getMovieSearchURL(pgNum,searchString) {
        return `${this.apiLocation}search/movie?api_key=${this.apiKey}&query=${searchString}&include_adult=false&page=${pgNum}`;
    }

    getPersonSearchURL(pgNum,searchString) {
        return `${this.apiLocation}search/person?api_key=${this.apiKey}&query=${searchString}&include_adult=false&page=${pgNum}`;
    }

    getImageURL(relativePath) {
        return `${this.imgURL}${relativePath}`;
    }

    getGenresURL() {
        return `${this.apiLocation}genre/movie/list?api_key=${this.apiKey}`;
    }

    getMoviesByGenreURL(pgNum, genreID) {
        return `${this.apiLocation}discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&include_adult=false&with_genres=${genreID}&page=${pgNum}`
    }

    getMovieCreditsURL(personID) {
        return `${this.apiLocation}person/${personID}/movie_credits?api_key=${this.apiKey}`;
    }

    getMovieCastURL(movieID) {
        return `${this.apiLocation}movie/${movieID}/credits?api_key=${this.apiKey}`;
    }
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;