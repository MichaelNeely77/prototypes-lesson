// class Person {
//     name='Michael';
//     constructor() {
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

const person = new Person();

person.greet();
console.log(person.toString());


