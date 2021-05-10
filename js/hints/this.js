'use strict'

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// }
// obj.sum();

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }
// const ivan = new User('Ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// создание новой функции связанной с определенным контекстом:
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(13));

// 1) Обычная функцияЖ this = window, но если стоит строгий режим - undefined
// 2) При использовании метода внутри объекта, контекст вызова будет ссылаться на этот объект
// 3) this в конструкторах и классах это новый экземпляр объекта
// 4) ручная привязка this через call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    console.log(this); //выведет объект на котором произошло событие
    // работает при классическом синтаксисе function
});

// у стрелочной функции нет своего контекста вызова, в таком случае используется контекст родителя
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        }
        say();
    }
};
obj.sayNumber();

const double = a => a * 2;

console.log(double(8));