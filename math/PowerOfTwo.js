function powerOfTwoLinear (n) {
    for (let i = 0; i < n; i++) {
        if ((2**i) == n) {
            return true;
        };
    };
    return false;

    // BigO = O(n)
};
console.log(powerOfTwoLinear(2));


function powerOfTwoLog (n) {
    if (n < 1) {
        return false;
    };
    while (n > 1) {
        if ((n % 2) !== 0) {
            return false;
        };
        n = n / 2;
    };
    return true;

    // BigO = O(logn)
};
console.log(powerOfTwoLog(5));


function powerOfTwoConst (n) {
    if (n < 1) {
        return false;
    };
    return (n & (n - 1)) == 0;

    // BigO = O(1)
};
console.log(powerOfTwoConst(1));

