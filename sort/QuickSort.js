function myQuickSort (arr) {

    if (arr.length < 2) {
        return arr;
    };
    
    let pivot = arr[arr.length - 1];
    let sameAsPivot = arr.filter(num => num == pivot);
    let leftArr = arr.filter(num => num < pivot);
    let rightArr = arr.filter(num => num > pivot);

    return myQuickSort(leftArr).concat(sameAsPivot, myQuickSort(rightArr));
};


let arr = [-6, 20, 8, -2, 4];
// console.log(myQuickSort(arr));

function quickSort (arr) {
    if (arr.length < 2) {
        return arr;
    };
    
    let pivot = arr[arr.length - 1];
    let left = [];    
    let right = [];    
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        };
    };

    return [...quickSort(left), pivot, ...quickSort(right)];

    // Avg case = O(n^logn)
    // BigO = O(n^2)
};

arr = [-6, 20, 8, -2, 4];
console.log(quickSort(arr));
