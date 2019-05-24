/**
 * 
 * @param {number []} arr 要排序的数组
 * @param {number []} gaps 增量序列
 */
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
// shellSort(arr, [5, 3, 1]);


function shellSort1(arr) {
    let len = arr.length;
    for (let gap = len >> 1; gap > 0; gap >>= 1) {
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap &&
                    arr[j - gap] > temp; j -= gap) {
                // 交换法
                swap(arr, j, j - gap);
            }
        }
    }

    function swap(arr, i, j) {  
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

let arr = [3, 5, 1, 6, 4, 7, 2];

shellSort1(arr);
console.log(arr);