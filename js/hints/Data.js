// const now =  new Date();
// const now = new Date(2021, 5, 10, 11); //время по Гринвичу
// const now = new Date('2021-05-10');
// new Date.parse('2021-05-10');
const now = new Date();

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now.setHours(18));

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);
