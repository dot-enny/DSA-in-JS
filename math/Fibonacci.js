function fibonacci (n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    };
    return fib;

    // BigO = O(n)
};

function fib(n) {
    if(n < 2) return;
    let result = [0, 1];

    while(result.length < n) {
        result[result.length] = result[result.length - 1] + result[result.length - 2];
    }
    return result;

    // BigO = O(n)
};

// console.log(fibonacci(7));

function recursiveFibonacci (n) {
    if (n < 2) {
        return n;
    };
    return recursiveFibonacci(n -1) + recursiveFibonacci(n - 2);

    // BigO = O(2^n)
};

console.log(recursiveFibonacci(6)); 

