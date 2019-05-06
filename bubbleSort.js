function bubbleSort(array) {
    let len = array.length, i, tmp, num = 0;
    while (num < len) {
        for (i = len - 1; i > num; i--) {
            if (array[i] < array[i - 1]) {
                [array[i], array[i - 1]] = [array[i - 1], array[i]];
            }
        }
        num++;
    }
    return array; 
}

console.log(bubbleSort([5, 3, 6, 2, 10]))