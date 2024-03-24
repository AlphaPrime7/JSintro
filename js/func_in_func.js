//FUNCTION CANIBAILIZATION
const factorial = function fac(n){
    return n < 2 ? 1 : n * fac(n-1)
}

//TESTS
console.log(factorial(3))