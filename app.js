// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }
//
// class Person extends AgedPerson {
//     name='Michael';
//     constructor() {
//         super();
//         this.age = 56;
//     }
//     greet() {
//         console.log('Hi, I am  ' + this.name + ' and I am ' + this.age + ' years old.'
//         );
//     }
// }

function Person() {
    this.age = 56;
    this.name = 'Michael';
    // This is a Constructor Function
    this.greet = function() {
        console.log('Hi, I am  ' + this.name + ' and I am ' + this.age + ' years old.'
         );
    }
}

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

Person.prototype.printAge = function() {
    console.log(this.age);
}

console.dir(Person);

const person = new Person();

person.greet();
person.printAge();
console.log(person.__proto__);


