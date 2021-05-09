const btns = document.querySelectorAllA('button'),
      overlay = document.querySelector('.overl');

//неактуальны способ назначения обработчика
// btn.onclick = function() {
//     alert('Hello');
// };
//перезапишет предыдущее назначение
// btn.onclick = function() {
//     alert('Hello again');
// };

const deleteElem = (e) => {
    console.log(e.target);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElem);
// overlay.addEventListener('click', deleteElem);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElem, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});