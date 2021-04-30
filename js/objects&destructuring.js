const options = {
    name: 'test',
    width: 1027,
    height: 720,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

//вместо 
//console.log(options['colors']['border']);
const {border, background} = options.colors;
console.log(border)

// console.log(Object.keys(options).length);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}