function shellSort(arr, gaps) {
    for (let g = 0; g < gaps.length; g++) {
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gaps[g] &&
                    arr[j - gaps[g]] > temp; j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]];
                console.log('arr', arr);
            }
            arr[j] = temp;
            console.log('arr1', arr);
        }
    }
}
let arr = [3, 5, 1, 6, 4, 7, 2];
shellSort(arr, [5, 3, 1]);

console.log(arr);