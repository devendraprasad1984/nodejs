function findElement(arr, size) {
    var right_sum = 0, left_sum = 0;
    // Maintains left cumulative sum
    left_sum = 0;

    // Maintains right cumulative sum
    right_sum = 0;
    var i = -1, j = -1;

    for (i = 0, j = size - 1; i < j; i++, j--) {
        left_sum += arr[i];
        right_sum += arr[j];

        // Keep moving i towards center until
        // left_sum is found lesser than right_sum
        while (left_sum < right_sum && i < j) {
            i++;
            left_sum += arr[i];
        }
        // Keep moving j towards center until
        // right_sum is found lesser than left_sum
        while (right_sum < left_sum && i < j) {
            j--;
            right_sum += arr[j];
        }
    }
    if (left_sum == right_sum && i == j)
        return arr[i];
    else
        return -1;
}

// Driver code

var arr = [2, 3, 4, 1, 4, 5];
var size = arr.length;
document.write(findElement(arr, size));