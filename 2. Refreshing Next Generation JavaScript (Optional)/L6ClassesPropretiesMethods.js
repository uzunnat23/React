// Propreties are like "variables attached to classes/obj"
// constructor(){
//     this.myProperty = 'value';
// }

// Methods are like "functions attached to classes/obj"
// myMethod(){ };
// myMethod = () => { };

class Human {
    geder = 'female';

    printGender = () => {
        console.log(this.geder);
    }
}

class Person extends Human {
    name = 'Nataly';
    geder = 'male'

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();