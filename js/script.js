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



//Lesson 16

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// Function declaration
// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

//Function expression
// const logger = function () {
//     console.log('Hello World');
// };

// logger();

// Стрелочная функция
// const calc = (a, b) => a + b;



// // Lesson 17


// const str = "teSt";

// // console.log(str[2]);
// // console.log(str[2] = 'd');
// // console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); // поиск под строки

// const logg = "Hello World";

// // console.log(logg.slice(6, 11)); // до какого то момента не включая
// console.log(logg.slice(-5, -1));

// // console.log(logg.substring(6, 11)); // не поддерживает отрицательные значения

// console.log(logg.substr(6, 5)); // второй аргумент указывает сколько символов отрезать

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));



// Lesson 19


// function first() {
//   //Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// //callback функция - это функция которая должна быть выполнена после того как другая функция завершила своё выполнение

// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('I done this lesson');
// }

// learnJS('JavaScript', done);



// Lesson 20


// const obj = new Object();

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function () {
//     console.log("Test");
//   }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Option ${i} have item ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Option ${key} have item ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);



// Lesson 21


// const arr = [11, 23, 35, 62, 8];
// arr.sort(compareNum);
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} inside massive ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));



// Lesson 22


// let a = 5,
//   b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // Ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};

//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   i: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adasdasdas';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpress', 'livejournal', 'blogger'],
//   internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array];

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = { ...q };
// newObj.one = 2;
// console.log(newObj);
// console.log(q);



// Lesson 22


let str = "some";
let strObj = new String(str);

// console.log(typeof(strObj));
// console.log(typeof(str));

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  }
};

const jonh = Object.create(soldier);

// const jonh = {
//   health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
jonh.sayHello();