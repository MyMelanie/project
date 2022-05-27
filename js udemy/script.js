'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


const answer = prompt('Один из последних просмотренных фильмов?', ''),
    count = prompt('На сколько его оцените?', ''),
    answer2 = prompt('Один из последних просмотренных фильмов?', ''),
    count2 = prompt('На сколько его оцените?', '');

peronalMovieDB.movies[answer] = count;
peronalMovieDB.movies[answer2] = count2;

console.log(peronalMovieDB);
