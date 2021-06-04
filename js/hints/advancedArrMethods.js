'use strict';

// filter - фильтрация
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemort'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames);

// map - преобразование
// const answers = ['ivAn', 'AnnA', 'Hello'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result);

// every/some

// some - хотя бы один элемент соответствует
// const some = [4, 'qwe', '1fifkd5'];
// console.log(some.some(item => typeof(item) === 'number'));

// every - все эл-ты соответствуют
// console.log(some.every(item => typeof(item) === 'number'));

// reduce - собирает массив в единое целое
// const arr = [1, 2, 4, 6, 9, 8];
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr2 = ['apple', 'pear', 'plum'];
// const res2 = arr2.reduce((sum, current) => `${sum},  ${current}`);
// console.log(res2);


// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };
// const newArr = Object.entries(obj); //преобразует объект в матрицу массивов
// console.log(newArr);
// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);
// console.log(newArr);