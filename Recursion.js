function sum (arr) {
    if (arr.length < 2) {
        return arr[0];
    };
    return arr.shift() + sum(arr);
    //BigO = O(n^2)
};
function sum2 (arr) {
    if (arr.length == 0) {
        return 0;
    };
    return arr[0] + sum(arr.slice(1));
    //BigO = O(n^2)
};
function sum3 (arr, index = 0) {
    if (index == arr.length) {
        return 0;
    };
    return arr[index] + sum3(arr, index + 1);
    //BigO = O(n)
};
let arr = [10, -20, 1, 2, 3, 4, 5];
console.log(sum(arr));
arr = [10, -20, 1, 2, 3, 4, 5];
console.log(sum2(arr));
arr = [10, -20, 1, 2, 3, 4, 5];
console.log(sum3(arr));



function counter (arr, count = 0) {
    if (count == arr.length) {
        return count;
    };
    return counter(arr, count+1);
    //BigO = O(n)
};
function counter2 (arr) {
    if (arr.length == 0) {
        return 0
    };
    return 1 + counter2(arr.slice(1));
    //BigO = O(n^2)
};
function counter3 (arr, index = 0) {
    if (index == arr.length) {
        return 0
    };
    return 1 + counter3(arr, index + 1);
    //BigO = O(n)
};

arr = [10, -20, 1, 2, 3, 4, 5];
console.log(counter(arr));
arr = [10, -20, 1, 2, 3, 4, 5];
console.log(counter2(arr));
arr = [10, -20, 1, 2, 3, 4, 5];
console.log(counter3(arr));



function maxFinder (arr) {
    if (arr.length < 2) {
        return arr[0];
    };
    if (arr[0] < arr[1]) {
        return maxFinder(arr.slice(1));
    } else {
        let small = arr[0];
        arr[0] = arr[1];
        arr[1] = small;
        return maxFinder(arr.slice(1));
    };
    //BigO = O(n^2)
};
arr = [10, -20, 1, 2, 3, 4, 5];
console.log(maxFinder(arr));

function maxFinder2 (arr, index, max = arr[0]) {
    if (index == arr.length) {
        return max;
    } else if (max < arr[index]) {
        max = arr[index];
    };
    return maxFinder2(arr, index + 1, max);
    //BigO = O(n)
};
arr = [10, -20, 1, 5, 4, 2];
console.log(maxFinder2(arr, 1));

function maxFinder3 (arr) {
    if (arr.length == 1) {
        return arr[0]
    };
    const restMax = maxFinder3(arr.slice(1));
    return arr[0] > restMax ? arr[0] : restMax;

    // BigO = O(n^2)
};
arr = [10, -20, 1, 5, 4, 2];
console.log(maxFinder3(arr, 1, arr[0]));

