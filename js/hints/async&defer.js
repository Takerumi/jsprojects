/* в html документе 
<body>
    <script defer src='js/script.js'></script>
    // атрибут defer сообщает браузеру, что скрипт загружается в фоновом режиме
    // выполняется после того как готов DOM
    <script async src='js/test.js'></script>
    // атрибут async позволяет скрипту загрузиться в фотоном режиме и 
    // запускается как только был загружен 
    <p>Hello world</p>
    <p>Another message</p>
</body>
*/

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; //отмена асинхронного поведения
    document.body.append(script);
    // динамически загружаемые скрипты по-умолчанию ведут себя как async
}

loadScript('js/test.js');
loadScript('js/some.js');