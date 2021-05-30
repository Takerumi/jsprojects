'use strict';

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log('Подготовка данных...');

//         const product = {
//             name: 'TV',
//             price: 20000
//         };

//         resolve(product);
//     }, 2000);
// });

// вариант с созданием переменной
// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
//     req2.then(data => {
//         console.log(data);
//     });
// });

// chaining, вариант без создания переменной
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally')
// });

// reject
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             reject();
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// });

// вариант с callbacks
// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 20000
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// метод ожидает выполнения всех промисов
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// метод ожидает первого отработавшего промиса
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('First');
});