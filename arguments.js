function sum(a, b, c){

    // console.log(typeof arguments); // object
    const args = [...arguments]
    // console.log(args);
    return a + b + c;
}

const total = sum(45, 15, 89, 554, 65, 41, 32);
console.log(total);
console.log(sum.length); // 3