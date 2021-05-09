let a = 5, 
    b = a;

b = b + 5;

// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copyObj = obj; //передается ссылка на объект

copyObj.a = 10;

// console.log(copyObj);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

newNumbers.c.x = 10; //так же передает ссылку, т.к. копия поверхностная

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); //независимая поверхностная копия

const clone = Object.assign({}, add);

clone.d = 22;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'rddkdkvvvv'

// console.log(newArray);
// console.log(oldArray);

const video = ['youtube', 'vimeo', 'coub'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'google'];

// console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const updateArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; //ES9

