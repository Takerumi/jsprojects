function first() {
    // do smth
    setTimeout(function() {
        console.log(1);
    }, 500);
}
 function second() {
     console.log(2);
}

first();
second();

function testingFunc(lang, callback) {
    console.log(`Я изучаю ${lang}`);
    callback();
}

testingFunc('JavaScript', function() {
    console.log('Я прошел этот урок');
});

//или с использованием неанонимной функции
// function done() {
//     console.log('Я прошел этот урок');
// }

// testingFunc('JavaScript', done);