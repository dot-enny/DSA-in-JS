function linearSearch (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        };
    };
    return -1;

    // BigO = O(n)
};
let arr = [-6, 20, 5, 8, 4, 7, 3];
console.log(linearSearch(arr, 20));



