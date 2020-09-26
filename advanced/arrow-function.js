const square = (num) => num * num;

const squareLong = (num) =>{
    return num * num;
};

//console.log(square(5));

const people = [
    {name: 'Marek', age: 21},
    {name: 'Jarosław', age: 21},
    {name: 'Jan', age: 28},
    {name: 'Grzegorz', age: 29},
    {name: 'Tomasz', age: 30},
    {name: 'Robert', age: 31},
];

const peopleUnder30 = people.filter( (person) => person.age < 30 );

const peopleUnder30Long = people.filter(function (person) {
    return person.age < 30;
});

//console.log(peopleUnder30);

const peopleAgeIs22 = people.find( (person) => person.age === 22);

console.log(peopleAgeIs22);