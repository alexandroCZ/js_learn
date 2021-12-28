"use strict";
// != не ровно, str.length проверить длину строки
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


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
//   (a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b : i--, console.log('Error');
//   i++;
// }

// console.log(personalMovieDB);

// Third 

let i = 0;
do {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log('Error');
    i--;
  }
  i++;
}
while (i < 1);

if (numberOfFilms <= 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (numberOfFilms <= 30) {
  console.log('Вы классический зритель');
} else if (numberOfFilms > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);