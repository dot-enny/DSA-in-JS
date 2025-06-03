function binarySearch(arr, target) {
    if(arr.length < 1) return -1;
    let startIdx = 0;
    let endIdx = arr.length - 1;
    while (endIdx >= startIdx) {
        let middleIdx = Math.floor((startIdx + endIdx) / 2); // NOTE update middleIndex inside while loop to avoid infinite loop
        if(target === arr[middleIdx]) return middleIdx;
        if(target < arr[middleIdx]) endIdx = middleIdx - 1;
        if(target > arr[middleIdx]) startIdx = middleIdx + 1;
    }
    return -1;

    // BigO = O(logn)
}

function recursiveBinarySearch(arr, target) {
    if(arr.length < 1) return -1;
    return recBin(arr, target, 0, arr.length - 1);
}

const recBin = (arr, target, startIdx, endIdx) => {
    if(endIdx < startIdx) return -1;
    let middleIdx = Math.floor((endIdx + startIdx) / 2);
    if(target === arr[middleIdx]) return middleIdx;
    if(target < arr[middleIdx]) {
        return recBin(arr, target, startIdx, middleIdx - 1)
    } else {
        return recBin(arr, target, middleIdx + 1, endIdx)
    }
}

console.log(binarySearch([], 0))
console.log(binarySearch([0, 1, 2, 3], 1))
console.log(binarySearch([0, 1, 2, 3], 0))
console.log(binarySearch([0, 1, 2, 3], 2))
console.log(binarySearch([0, 1, 2, 3], 4))

console.log(recursiveBinarySearch([], 0))
console.log(recursiveBinarySearch([0, 1, 2, 3], 1))
console.log(recursiveBinarySearch([0, 1, 2, 3], 0))
console.log(recursiveBinarySearch([0, 1, 2, 3], 2))
console.log(recursiveBinarySearch([0, 1, 2, 3], 3))
console.log(recursiveBinarySearch([0, 1, 2, 3], 4))



