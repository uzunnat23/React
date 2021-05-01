//Destructuring is easily extract elements or object properties and store them in variables.
//Array Destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);//1  2

[num1, , num2] = numbers;
console.log(num1, num2);//1  3

//Obj Destructuring
// { name } = { name: 'Nataly', age: 22 }
// console.log(name); //Nataly
// console.log(age); //undefined
