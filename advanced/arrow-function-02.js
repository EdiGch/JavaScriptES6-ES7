const add = function(){
    return arguments[0] + arguments[1];
}



console.log( add(10,20,25,36,78) );

const car = {
    color: 'red',
    getSummary(){
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary());
