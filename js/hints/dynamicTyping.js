//to string

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2)
console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog' + num);

const fontSize = 26 + 'px';

//to number

//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'6'));

//3)
console.log(parseInt('15px', 10));

let answ = +prompt('How old are you?', '');

//to boolean
// 1)
const falsee = [0, '', null, undefined, NaN, false];

let switcher = null;

if (switcher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!'4444'));