function selectionSort(arr) {
    let nowArr = [], smallestIndex;
    while (arr.length) {
        smallestIndex = findSmallest(arr);
        nowArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex, 1);
    }

    return nowArr;

    function findSmallest(arr) {
        let min = arr[0], i, minIndex = 0;
        for (i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                minIndex = i;
            }
        }

        return minIndex;
    }
}

let arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));