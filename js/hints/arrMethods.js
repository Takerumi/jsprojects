const arr = [18, 2, 13, 61, 8];
arr.sort(compareNum);
// console.log(arr);

function compareNum(a, b) {
    return a - b;
}

for (let value of arr) {
    console.log(value);
}

// arr[99] = 0;
// console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = prompt('Введите товары через запятую', '');
const products = str.split(', '); //разделяем строку в массив
products.sort(); //сортировка строк
// console.log(products.join('; ')); //склеиваем массив