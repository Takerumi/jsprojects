'use strict';

let numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1, answer2;

for (let i = 0; i < 2; i++) {
    answer1 = prompt('Один из последних просмотренных фильмов?', '');
    answer2 = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[answer1] = answer2;
};

console.log(personalMovieDB);