// touchstart 
// touchmove
// touchend
// touchenter - наскальзывание на пределы элемента
// touchleave - ускальзывание с элемента
// touchcancel - точка соприкосновения не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });
});

// touches - свойство выдает список всех тапов и детали
// targetTouches - свойство тапов взаимодействующих с конкретным элементом
// changedTouches - тапы учавствующие в текущем событии
