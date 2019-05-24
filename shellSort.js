function shellSort(arr, gaps) {
    for (let g = 0; g < gaps.length; g++) {
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gaps[g] &&
                    arr[j - gaps[g]] > temp; j -= gaps[g]) {
                // 移动法
                arr[j] = arr[j - gaps[g]];
                console.log('arr', arr);
            }
            arr[j] = temp;
            console.log('arr1', arr);
        }
    }
}

/**
 * 
 * @param {number []} arr 要排序的数组
 * @param {number []} gaps 增量序列
 */
function shellSort1(arr, gaps) {
    for (let g = 0; g < gaps.length; g++) {
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gaps[g] &&
                    arr[j - gaps[g]] > temp; j -= gaps[g]) {
                // 交换法
                swap(arr, j, j - gaps[g]);
            }
        }
    }

    function swap(arr, i, j) {  
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let arr = [3, 5, 1, 6, 4, 7, 2];
shellSort1(arr, [5, 3, 1]);

console.log(arr);