const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length);
console.log(btns[0].classList.item(1)); //позволяет получить класс который располагается под опред.индексом
console.log(btns[1].classList.add('red', 'ttt')); //добавляем элементу указанные классы
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue')); //если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет
if (btns[1].classList.contains('red')) {
    console.log('red');
}

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    //или можно воспользоваться toggle
    btns[1].classList.toggle('red');
});

//делегирование событий
//берется родительский элемент и на него назначается обработчик для потомков
wrapper.addEventListener('click', (event) => {
    //вместо tagName можно использовать
    // event.target.matches('button.red')
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);