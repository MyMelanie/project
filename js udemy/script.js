'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
//start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyfilms() {
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
}

//rememberMyfilms();


function detectPersonalLevel() {}
    if(personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if( personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }


//detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for( let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        // можно записать сразу без присваивания одноразовой переменной. и-1 потому что индекс массива начинается с 0.
    }
}

writeYourGenres();

console.log(personalMovieDB);
