function binary_search(list, item) {
    let low = 0, high = list.length - 1, mid, guess;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = list[mid]
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

let list = [1, 3, 5, 7, 9, 11];

console.log(binary_search(list, 5));