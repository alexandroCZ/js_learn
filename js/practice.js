"use strict";
// != не ровно, str.length проверить длину строк

// First

// let i = 0;
// while (i < 1) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('Done!');
//   } else {
//     console.log('Error');
//     i--;
//   }
//   i++;
// }

// console.log(personalMovieDB);

// Second

// let i = 0;
// while (i < 1) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', '');
//   (a != null && b != null && a != '' && b != '' && a.length < 50) ? 
//   personalMovieDB.movies[a] = b : i--, console.log('Error');
//   i++;
// }

// console.log(personalMovieDB);

// Third 

// let i = 0;
// do {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//   } else {
//     console.log('Error');
//     i--;
//   }
//   i++;
// }
// while (i < 1);

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('Done');
    } else {
      console.log('Error');
      i--;
    }
  }
}

rememberMyFilms();

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

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const c = prompt(`Ваш любимый жанр под номером ${i}.`);
    if (c != null && c != '' && isNaN(c)) {
      personalMovieDB.genres[i - 1] = c;
    } else {
      i--;
    }
  }
}

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}.`);
// }

writeYourGenres();

// function showMyDB() {
//   if (personalMovieDB.privat == false) {
//     console.log(personalMovieDB);
//   } else {
//     console.log("Privat DB");
//   }
// }

// showMyDB();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);