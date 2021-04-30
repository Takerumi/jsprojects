function slicer(start, end) {
    const myString = 'Just do it!';
    return myString.slice(start, end);
}

slicer(5, 10);

//function expression
//not hoisting
const logger = function() {
    console.log('Hey you!')
};

logger();

//arrow function
//not use this
const calc = (a, b) => a + b;
//or
const arrowFunc = (a, b) => {
    console.log('To do something')
    return a + b;
};
const someArrowFunc = a => a + b;