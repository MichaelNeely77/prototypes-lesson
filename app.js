class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

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

}

Person.prototype.greet = function() {
    console.log('Hi, I am  ' + this.name + ' and I am ' + this.age + ' years old.'
    );
};



// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }



// const p = new Person();
// console.dir(Person);
// const p2 = new Person();
// console.log(p.__proto__ === p2.__proto__);

// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

const course = {
    title: 'JavaScript _ The Complete Guide',
    rating: 5
};


// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }
});
student.name = 'Michael';
Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
});


console.log(student);


// console.log(course.__proto__);
course.printRating();