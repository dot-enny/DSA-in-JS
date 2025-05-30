function primeNumber (n) {
    if (n < 2) {
        return false;
    };
    for (let i = 2; i < n; i++) {
        if ((n % i) == 0) {
            return false;
        };
    };
    return true;

    // BigO = O(n)
};

function isPrime(n) {
    if(n < 2) return false;
    for(let i = n - 1;  i > 1; i--) {
        if((n % i) === 0) return false;
    }
    return true;

    // BigO = O(n)
}

// Intergers larger than the square root of n do not need to be checked because, if n = a*b, atleast one of the factors a or b is less than or equal to the square root of n
function primeNumberSqrt (n) {
    if (n < 2) {
        return false;
    };
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ((n % i) == 0) {
            return false;
        };
    };
    return true;

    // BigO = O(sqrt(n))
};

console.log(primeNumber(4));
console.log(primeNumberSqrt(7));
