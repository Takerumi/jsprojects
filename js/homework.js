let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1, answer2;



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        answer1 = prompt('Один из последних просмотренных фильмов?', '');
        answer2 = +prompt('На сколько оцените его?', '');
        if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
            personalMovieDB.movies[answer1] = answer2;
        } else {
            console.log('Error! Некорректные данные');
            i--;
        }
    }
}

rememberMyFilms();
//цикл способ 2
// let i = 0
// while (i < 2) {
//     answer1 = prompt('Один из последних просмотренных фильмов?', '');
//     answer2 = +prompt('На сколько оцените его?', '');
//     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
//         personalMovieDB.movies[answer1] = answer2;
//     } else {
//         console.log('Error! Некорректные данные');
//         i--;
//     }
//     i++;
// }
//цикл способ 3
// let i = 0
// do {
//     answer1 = prompt('Один из последних просмотренных фильмов?', '');
//     answer2 = +prompt('На сколько оцените его?', '');
//     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
//         personalMovieDB.movies[answer1] = answer2;
//     } else {
//         console.log('Error! Некорректные данные');
//         i--;
//     }
//     i++;
// } while (i < 2);


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }  
}

detectPersonalLevel();


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

let answer3;

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        answer3 = prompt(`Ваш любимый жанр под номером ${i}?`, '');
    if (answer3 != null && answer3 != '') {
        personalMovieDB.genres.push(answer3);
    } else {
        console.log('Error! Некорректные данные');
        i--;
    }
    }
}

writeYourGenres();