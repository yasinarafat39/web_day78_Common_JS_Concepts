/**
 * Truthy: 
 *  1. true
 *  2. any number (+ve, -ve) will be truthy other than 0
 *  3. any string is truthy other than empty string
 *  4. '0'
 *  5. 'false'
 *  6. {}
 *  7. []
 *  8. 
 * 
 * Falsy: 
 *  1. false
 *  2. 0
 *  3. '' empty string
 *  4. undefined
 *  5. null
*/



let x = []; 
if(x){
    console.log('value of x is truthy');
}else{
    console.log('value of x is falsy');
}



// optional
// check false
const y = '';
if(!y){
    console.log('value is falsy');
}

// check truthy
const z = 50;
if(!!z){
    console.log('value is truthy');
}