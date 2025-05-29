function factorial (n) {
    let fac = 1;
    for (let i = 2; i <= n; i++) {
        fac*=i;
    };
    return fac;

    // BigO = O(n)
};

function factorial(n) {
    if(n < 2) return 1;
    let nFac = 1;
    for(let i = 1;  i < n; i++) {
        nFac *= i + 1;
    }
    return nFac;

    // BigO = O(n)
}

console.log(factorial(3));

function recursiveFactorial (n) {
    if (n == 0) {
        return 1;
    };
    // n! = n * (n - 1)!
    return n * recursiveFactorial(n - 1);

    // BigO = O(n)
};

console.log(recursiveFactorial(0));
