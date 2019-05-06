// function insertSort(array) {
//     let len = array.length, i, j, left = [];
//     for (i = 0; i < len; i++) {
//         if (left.length === 0) {
//             left.push(array[i]);
//         } else {
//             insertToArr(left, array[i])
//         }
//     }

//     return left;

//     function insertToArr(arr, item) {
//         let len = arr.length, i;
//         if (len === 1) {
//             if (arr[0] > item) {
//                 arr.unshift(item);
//             } else {
//                 arr.push(item);
//             }
//         } else {
//             if (arr[0] >= item) {
//                 arr.unshift(item);
//             } else if (arr[arr.length - 1] <= item) {
//                 arr.push(item);
//             } else {
//                 for (i = 0; i < len - 1; i++) {
//                     if (arr[i] <= item && arr[i + 1] >= item) {
//                         arr.splice(i + 1, 0, item);
//                         break;
//                     }
//                 }
//             }
//         }
//     }
// }

function insertSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }

    return arr;
}

console.log(insertSort([5, 3, 6, 2, 10]))