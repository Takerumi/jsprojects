function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

//реализация через классы
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} ушел`)
//     }
// }

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

console.log(ivan);
console.log(alex);

