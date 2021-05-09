//методы возвращающие HTMLCollection
//получение элементов по id
const box = document.getElementById('box');
 
//получение элементов по тэгу
// const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

//получение элементов по имени класса
const circles = document.getElementsByClassName('circle');

const wrapper = document.querySelector('.wrapper');

//методы возвращающие NodeList
//получение элементов по css-селектору
const hearts = wrapper.querySelectorAll('.heart');


hearts.forEach(item => {
    console.log(item);
});

//получение первого элемента по css-селектору
const oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

let num = '500';
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);

// document.querySelector('.wrapper').prepend(div);
document.querySelector('.wrapper').append(div);
//устаревший способ
// document.querySelector('.wrapper').appendChild(div);


//добавление элемента перед или после другого эл-та
// hearts[0].before(div);
// hearts[0].after(div);

//удаление элемента со страницы
// circles[0].remove();

//замещение элемента
hearts[0].replaceWith(circles[0]);

//инъекция HTML
div.innerHTML = '<h1>Привет, мир!</h1>';

// div.textContent = 'Hello'; //работает только с текстом

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');