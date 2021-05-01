function printMyName(name) {
    console.log(name);
}

printMyName('Nataly');

//Arrow functions
const printMyName1 = (name) => {
    console.log(name);
}
printMyName('Nataly1');

const printMyNameAndAge = (name, age) => {
    console.log(name, age);
}
printMyNameAndAge('Nataly2', 22);

// const multiply = (number) => {
//     return number * 2;
// }
// console.log(2);

const multiply = number => number * 2;
console.log(2);