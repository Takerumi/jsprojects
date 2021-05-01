let str = 'someString';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100
};

const andy = Object.create(soldier);

//устаревший вариант наследования
// john.__proto__ = soldier;
// console.log(john.armor) //100

Object.setPrototypeOf(john, soldier); //присвоение прототипа

john.sayHello();
andy.sayHello();