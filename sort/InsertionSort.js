function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        let nti = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            let se = arr[j];
            if (se > nti) {
                arr[j + 1] = se;
                arr[j] = nti;
            };
        };
    };
    return arr;

    // BigO = O(n^2)
};

let arr = [-6, 20, 8, -2, 4];
console.log(insertionSort(arr));

function insertionSort2 (arr) {
    for (let i = 1; i < arr.length; i++) {
        let nti = arr[i];
        let j = i -1;
        while (j >= 0 && arr[j] > nti) {
            arr[j + 1] = arr[j];
            j = j - 1;
        };
        arr[j + 1] = nti;
    };
    return arr;
 
    // BigO = O(n^2)
};

arr = [-6, 20, 8, -2, 4];
console.log(insertionSort2(arr));