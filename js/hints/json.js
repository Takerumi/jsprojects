'use strict';

const person = {
    name: 'Alex',
    tel: '+74444444444',
    parents: {
       mom: 'Olga',
       dad: "Mike" 
    }
};

const jsonPerson = JSON.stringify(person);

// console.log(JSON.parse(jsonPerson));

//глубокая копия объекта
const clonePerson = JSON.parse(JSON.stringify(person));
clonePerson.parents.mom = 'Ann';

