const personalMovieDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    startQuestion: function() {
        personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
            const rating = +prompt('На сколько оцените его?', '');
            if (lastFilm != null && rating != null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rating;
            } else {
                console.log('Error! Некорректные данные');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}?`).toLowerCase();
        if (genre != null && genre != '') {
            personalMovieDB.genres.push(genre);
        } else {
            console.log('Некорректные данные');
            i--;
        }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        switch (personalMovieDB.privat) {
            case true:
                personalMovieDB.privat = false;
                break;
            case false:
                personalMovieDB.privat = true;
                break;
        }
    }
};

personalMovieDB.startQuestion();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);