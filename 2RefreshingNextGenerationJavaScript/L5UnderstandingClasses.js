// class Person {
//     name = 'Nataly' //Property
//     call = () => {  //Method
//         console.log('Hello');
//     }
// }

// const myPerson = new Person();
// myPerson.call();
// console.log(myPerson.name);

class Human {
    constructor() {
        this.geder = 'female';
    }
    printGender() {
        console.log(this.geder);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Nataly';
        this.geder = 'male'
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();