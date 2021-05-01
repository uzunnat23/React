//Spread used to split up array elements OR obj properties
//ARRAYS
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

//OBJECTS
const person = {
    name: 'Nataly'
};

const newPerson = {
    ...person,
    age: 22
}

console.log(newPerson);

//Rest used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(el => al === 1);
}

console.log(filter(1, 2, 3));