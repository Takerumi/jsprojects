/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ads = document.getElementsByClassName('promo__adv'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      moviesList = document.querySelector('.promo__interactive-list');

function removeAds() {
    ads[0].remove();
}

//or
// function removeAds() {
//     const ads = document.querySelectorAll('.promo__adv img');
//     adv.forEach(item => {
//         item.remove();
//     });
// }

function replaceGenre() {
    genre.textContent = 'ДРАМА';
}

function replaceBG() {
    poster.style.backgroundImage = "url('img/bg.jpg')";
}

moviesList.innerHTML = '';

function addMovies() {
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });
}

removeAds();
replaceGenre();
replaceBG();
addMovies();