function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            // swap(arr, i, j);
            [arr[i], arr[j]] = [arr[j], arr[i]] //using destructure
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log('quick sorted array', arr)