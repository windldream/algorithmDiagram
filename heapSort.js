function heapSort(arr) {
    let heapSize = arr.length;
    buildHeap(arr);

    while (heapSize > 1) {
        heapSize--;
        swap(arr, 0, heapSize);
        heapify(arr, heapSize, 0);
    }

    console.log(arr);

    function buildHeap(arr) {
        let heapSize = arr.length;
        for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
            heapify(arr, heapSize, i);
        }
    }

    function heapify(array, heapSize, i) {
        let left = i * 2 + 1,
            right = i * 2 + 2,
            largest = i;

        // 取得最大的子节点
        if (left < heapSize && array[left] > array[largest]) {
            largest = left;
        }

        if (right < heapSize && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== i) {
            swap(array, i, largest);
            heapify(array, heapSize, largest);
        }
    }

    function swap(arr, index1, index2) {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
}

heapSort([3, 5, 1, 6, 4, 7, 2])