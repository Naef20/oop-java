// Exercise 1 - Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return Hi, my name is ${this.name} and I am ${this.age} years old.;
    }
}

// Exercise 2 - This
const person1 = new Person('John', 25);
function describePerson(callback) {
    callback.call(person1);
}
function logIntroduction() {
    console.log(this.introduce());
}
describePerson(logIntroduction); 

// Exercise 3 - Promises
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Resolved after ${milliseconds} milliseconds);
        }, milliseconds);
    });
}

// Exercise 4 
wait(2000).then((message) => {
    console.log(message);
});