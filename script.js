'use strict';

let personalMovieDB = {
    count: 1,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        let numberOfFilms = +prompt("how many films have you watched?", "");
        while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("how many films have you watched?", "");
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function(){
        for( let i = 0; i < 2; i++ ){
            let a, b;
            a = prompt("Name of one of the last films, you watched?", "");
            b = prompt("Yours feedback from 1 to 10?", "");
            if(a != "" && b != "" && a != null && b != null && a.length < 50){
                console.log("done!");
                personalMovieDB.movies[a] = b;
            } else {
                console.log("Error!");
                i--;
            }
        }
    },
    detectPersonalLvl: function(){
        if(personalMovieDB.count < 10){
            console.log("U watched a few films")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log("U R - classic veuwer")
        } else if (personalMovieDB.count >= 30 ){
            console.log("U R - cinemaholic")
        } else{
            console.log("Error!")
        }
    },
    showMyDB: function(){
        if(personalMovieDB.private != true){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        let i = 0;
        while( i < 3){
            personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i + 1} `, "");
            while(personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null){
                personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i + 1} `, "");
            }
            i++;
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private != true){
            personalMovieDB.private = true;
        } else{
            personalMovieDB.private = false;
        }
    },
    forEach: function(){
        for (let index = 0; index < personalMovieDB.genres.length; index++) {
            console.log(`Your favourite genre number ${index + 1} is ${personalMovieDB.genres[index]}`);
        }
    }
};
//console.log(personalMovieDB.count);
personalMovieDB.start();
personalMovieDB.writeYourGenres();
//console.log(personalMovieDB.private);
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.forEach();
personalMovieDB.showMyDB();
