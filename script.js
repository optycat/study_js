'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("how many films have you watched?", "");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("how many films have you watched?", "");
    }
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
function rememberMyFilms(){
    for( let i = 0; i < 2; i++ ){
        let a, b;
        a = prompt("Name of one of the last films, you watched?", "");
        b = prompt("Yours feedback from 1 to 10?", "");
        if(a != "" && b != "" && a != null && b != null && a.length < 50){
            console.log("done!");
            personalMovieDB.movies[a] = b;
            //a = prompt("Re-enter name of film, field require smht", "");
        } else {
            console.log("Error!");
            i--;
        }
        /*if(a == ""){
        a = prompt("Re-enter name of film, field require smht", "");
        i--;
    }else if(b == ""){
        b = prompt("Re-enter feedback from 1 to 10, field require smht", "");
        i--;
    } else if(a == null){
        a = prompt("Re-enter name of film, field require smht", "");
        i--;
    } else if(b == null){
        b = prompt("Re-enter feedback from 1 to 10, field require smht", "");
        i--;
    } else if(a.length < 50){
        a = prompt("Re-enter name of film, field require smht", "");
        i--;
    } else if(b.length < 50){
        b = prompt("Re-enter feedback from 1 to 10, field require smht", "");
        i--;
    }
    console.log("a= ", a);
    console.log("b= ", b);
    personalMovieDB.movies[a] = b;*/
    }
}
rememberMyFilms();
/*
let i = 0;
while( i < 2 ){
    let a, b;
    a = prompt("Name of one of the last films, you watched?", "");
    b = prompt("Yours feedback from 1 to 10?", "");
    i++;
    if(a != "" && b != "" && a != null && b != null && a.length < 50){
        console.log("done!");
        personalMovieDB.movies[a] = b;
    } else {
        console.log("Error!");
        i--;
    }
}
let i = 0;
do{
    let a, b;
    a = prompt("Name of one of the last films, you watched?", "");
    b = prompt("Yours feedback from 1 to 10?", "");
    i++;
    if(a != "" && b != "" && a != null && b != null && a.length < 50){
        console.log("done!");
        personalMovieDB.movies[a] = b;
    } else {
        console.log("Error!");
        i--;
    }
}while( i < 2 );
*/
function detectPersonalLvl(){
    if(personalMovieDB.count < 10){
        console.log("U watched a few films")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log("U R - classic veuwer")
    } else if (personalMovieDB.count >= 30 ){
        console.log("U R - cinemaholic")
    } else{
        console.log("Error!")
    }
}

detectPersonalLvl();

function showMyDB(someArg){
    if(someArg != true){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    let i = 0;
    while( i < 3){
        personalMovieDB.genres[i] = prompt(`Your favourite genre number ${i + 1} `, "");
        i++;
    }
}
showMyDB(personalMovieDB.private);