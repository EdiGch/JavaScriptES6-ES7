const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25;
    }else{
        // Opction 1
        // throw 'Argument must be a number';
        // Opction 2
        throw Error('Argument must be a number');
    }
}

//const result = getTip(true);
//console.log(result);


const setPrice = (price) => {
    if(typeof price === 'number'){
        return price * .25;
    }else{
        // Opction 1
        // throw 'Argument must be a number';
        // Opction 2
        throw Error('Argument must be a number');
    }
}



try{
    const result = setPrice(true);
    console.log(result);
} catch(e){
    console.log(e.message);
}


