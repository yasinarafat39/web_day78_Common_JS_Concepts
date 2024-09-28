/**
 * 8 ways to get Undefined
 *  8-1: variable that is not initialized will give undefined
 *  8-2: function with no return
 *  8-3: parameter that is not passed will be undefined
 *  8-4: if return has nothing on the right side will return undefined
 *  8-5: property that doesn't exists on an object will give you undefined
 *  8-6: accessing array elements outside of the index range will give you undefined
 *  8-7: deleting an element inside an array
 *  8-8: set a value directly to undefined
*/

// 8-1
let first;
console.log(first); // undefined

// 8-2
function second(a, b){
    const total = a + b;
} 
console.log(second()) // undefined


// 8-3
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
third(2, 4) // 2 4 undefined undefined


// 8-4
function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}
const total = noNegative(2, -3);
console.log(total); // undefined


// 8-5
const fifth = {id: 2, name: 'ponchom', age: 40};
console.log(fifth.age, fifth.salary); // 40 undefined

// 8-6
const sixth = [4, 5, 8, 7, 9];
console.log(sixth[1], sixth[10]); // 5 undefined

// 8-7
   // you should not do it. Instead use splice
delete sixth[1];
console.log(sixth[1]); // undefined


// 8-8
const eighth = undefined; // undefined

const ninth = null;
const data = {result: [], updated: null};

console.log(typeof undefined); // undefined
console.log(typeof null); // Object
