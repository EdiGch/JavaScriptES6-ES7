const Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const me = new Person('Marek', 'Kowal', 24);
console.log(me);

const person2 = new Person('Tomasz', 'Kich', 25);
console.log(person2)
