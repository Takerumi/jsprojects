/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1, answer2;

//цикл способ 1
// for (let i = 0; i < 2; i++) {
//     answer1 = prompt('Один из последних просмотренных фильмов?', '');
//     answer2 = +prompt('На сколько оцените его?', '');
//     if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
//         personalMovieDB.movies[answer1] = answer2;
//     } else {
//         console.log('Error! Некорректные данные');
//         i--;
//     }
// }
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
let i = 0
do {
    answer1 = prompt('Один из последних просмотренных фильмов?', '');
    answer2 = +prompt('На сколько оцените его?', '');
    if (answer1 != null && answer2 != null && answer1 != '' && answer2 != '' && answer1.length < 50) {
        personalMovieDB.movies[answer1] = answer2;
    } else {
        console.log('Error! Некорректные данные');
        i--;
    }
    i++;
} while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);