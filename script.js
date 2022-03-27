const numberOfFilms = prompt("how many films have you watched?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

personalMovieDB.movies[prompt("Name of one of the last films, you watched?", "")] = prompt("Yours feedback from 1 to 10?", "");

console.log(personalMovieDB);