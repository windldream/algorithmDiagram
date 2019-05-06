function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return mergeArr(mergeSort(left), mergeSort(right));

    function mergeArr(arr1, arr2) {
        let i = 0, j = 0, l1 = arr2.length, l2 = arr2.length, result = [];
        while (i < l1 && j < l2) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i++]);
            } else {
                result.push(arr2[j++]);
            }
        }

        if (i === l1) {
            result = result.concat(arr2.slice(j))
        }

        if (j === l2) {
            result = result.concat(arr1.slice(i));
        }

        return result;
    }
}

console.log(mergeSort([2, 1, 6, 4, 5, 8, 7]))