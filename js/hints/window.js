const box = document.querySelector('.box'),
      btn = document.querySelector('button'),
      width = box.scrollWidth,
      height = box.scrollHeight;   
//    width = box.offsetWidth,
//    height = box.offsetHeight;    
//    width = box.clientWidth,
//    height = box.clientHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); //отображает координаты всех границ элемента

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);
