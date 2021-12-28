"use strict";
// let number = 5;  let переменная может быть изменена.
// const leftBorderWidth = 1;  const не может быть изменена.



// Lesson 6


// let number = 4.6;

// console.log(-4 / 0);
// console.log("string" * 9);

// const persone = "Alex";

// const bool = false;

// // console.log(something);

// let und;
// console.log(und);

// const obj = {
//   name: "John",
//   age: 25,
//   isMarrried: false,
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[1]);



// Lesson 7


// alert("Hello");
// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Age 18+?", "18"); // Вся информация что приходит от пользователя будет в виде строк 'string'
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your second name?', '');
// answers[2] = prompt('How old are you?', '');

// console.log(typeof (answers));
// console.log(typeof (null));



//Lesson 8


// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Privet, ${user}`);



//Lesson 9


// console.log('arr' + " - object");
// console.log(4 + "5");

// let incr = 10,
//   decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 * 4 === 8);
// console.log(2 + 4 * 2 === 8);
// console.log(2 + 2 * 2 !== '6');

// const isChecked = false,
//   isClose = false;

// // console.log(isChecked && isClose);
// console.log(isChecked || !isClose);



//Lesson 12


// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



//Lesson 13


// if (4 == 9) {
//   console.log('OK!');
// } else {
//   console.log('ERROR!');
// }

// const num = 50;

// if (num < 49) {
//   console.log('Error');
// } else if (num > 100) {
//   console.log('Too much');
// } else {
//   console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');
// Тернарный апператор, имеет три агрумента (единственный на данный момент в JS)
// 4 + 4 // + является бинарным аргуметом
//   + '4'; // унарный агрумент

// const num = '50';

// switch (num) {
//   case '49':
//     console.log('Wrong');
//     break;
//   case '100':
//     console.log('Wrong');
//     break;
//   case '50':
//     console.log('Right');
//     break;
//   default:
//     console.log('Not this time');
//     break;
// }



//Lesson 14


// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }