function quickSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        let pivot = array[0], i, less = [], greater = [];
        for (i = 1; i < array.length; i++) {
            if (array[i] <= pivot) {
                less.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }

        return quickSort(less).concat(pivot).concat(quickSort(greater));
    }
}

console.log(quickSort([2, 1, 6, 4, 5, 8, 7]))