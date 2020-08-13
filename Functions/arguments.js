let add = function (a, b, c){
    return a + b +c;
};


let result = add(10,1,5);

console.log(result);

let getScoreText = function (name = 'Anonymose', score = 0){
    return 'Name ' + name + ' Score: ' + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);


let getTip = function(total, tipPercent = .2){
    return 'Tip: ' + total * tipPercent;
}

let tip = getTip(40,undefined);
console.log(tip);

let name = 'Jen';

console.log(`Hey, my name is ${name}`);