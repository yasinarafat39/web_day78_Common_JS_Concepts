
// Primitive
// pass by value
let num1 = 5;
let num2 = 3;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply (num1, num2);
console.log(output);


//  non-primitive
// object and array are pass by reference
let student1 = {name: 'jalil', parrner: 'borsha'}
let student2 = {name: 'raj', parrner: 'anika'}

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.name = 'Ononto';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);