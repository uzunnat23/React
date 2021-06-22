//Primitive
const number = 1;
const num2 = number;

console.log(num2);

//Reference
const person = {
    name: 'Nataly'
};

// const secondPerson = person;
const secondPerson = {
    ...person
};
person.name = 'Andrew';

console.log(secondPerson);