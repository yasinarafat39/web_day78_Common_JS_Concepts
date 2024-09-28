

function add(a, b){
    const total = a + b;
    console.log(a, b);
    if(b > 5){
        const sum = 25 + a + b;
    }
    // console.log(sum); // Error
    return total;
}

// console.log(total) // Error
console.log(add(5, 8));