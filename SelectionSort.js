function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            };
        };
        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    };
    return arr;

    // BigO = O(n^2)
};

let arr = [-6, 20, 8, -2, 4];

console.log(selectionSort(arr));




