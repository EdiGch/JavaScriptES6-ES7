const products = [{name: 'Alex'}];
const product = products[0];

// Falsy values - false, 0, empty string, null, undefind, NaN

if(product){
    console.log('Product found');
}else{
    console.log('Product not fund');
}