'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for(let i = 0; i < 2; i++) {
    const answer = prompt('Один из последних просмотренных фильмов?', '');
    const count = prompt('На сколько его оцените?', '');
if(answer != null && count != null && answer != '' && count != '' && answer.length < 50) {
    personalMovieDB.movies[answer] = count;
} else {
    console.log('error');
    i--;
}
}

if(personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}else if( personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}else{
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
