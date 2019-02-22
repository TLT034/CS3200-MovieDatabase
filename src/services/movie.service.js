import apiService from './api.service';
import { Movie } from '../models/movie';
import { Person } from '../models/person';
import { Credit } from '../models/credit';
import { Cast } from '../models/cast';


let MovieService = class MovieService {
    constructor() { }

    searchMovies(pgNum, searchString) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieSearchURL(pgNum, searchString))
                .then((response) => response.json())
                .then((response) => {
                    //console.log(apiService.getMovieSearchURL(pgNum, searchString));
                    let items = [];
                    response.results.forEach(element => {
                        items.push(new Movie(element, apiService.getImageURL(element.poster_path)));
                    });
                    resolve(items);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    searchPeople(pgNum, searchString) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPersonSearchURL(pgNum, searchString))
                .then((response) => response.json())
                .then((response) => {
                    let items = [];
                    response.results.forEach(element => {
                        items.push(new Person(element, apiService.getImageURL(element.profile_path)));
                    });
                    resolve(items);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    getMovieDetails(movieID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieDetailsURL(movieID))
                .then((response) => response.json())
                .then((response) => {
                    resolve(new Movie(response, apiService.getImageURL(response.poster_path)));
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    getPersonDetails(personID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getPersonDetailsURL(personID))
                .then((response) => response.json())
                .then((response) => {
                    resolve(new Person(response, apiService.getImageURL(response.profile_path)));
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    getGenreList() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getGenresURL())
                .then((response) => response.json())
                .then((response) => {
                    resolve(response.genres);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    getMoviesByGenre(pgNum, genreID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMoviesByGenreURL(pgNum, genreID))
                .then((response) => response.json())
                .then((response) => {
                   // console.log(apiService.getMoviesByGenreURL(pgNum, genreID));
                    let items = [];
                    response.results.forEach(element => {
                        items.push(new Movie(element, apiService.getImageURL(element.poster_path)));
                    });
                    resolve(items);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }
    

    getMovieCredits(personID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieCreditsURL(personID))
                .then((response) => response.json())
                .then((response) => {
                    let items = [];
                    response.cast.forEach(element => {
                        items.push(new Credit(
                            apiService.getImageURL(element.poster_path),
                            element.title,
                            element.release_date
                        ));
                    });
                    resolve(items);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }


    getMovieCast(movieID) {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieCastURL(movieID))
                .then((response) => response.json())
                .then((response) => {
                    let items = [];
                    response.cast.forEach(element => {
                        items.push(new Cast(
                            apiService.getImageURL(element.profile_path),
                            element.name,
                            element.character
                        ));
                    });
                    resolve(items);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        });
    }
};

const movieService = new MovieService();
export default movieService;