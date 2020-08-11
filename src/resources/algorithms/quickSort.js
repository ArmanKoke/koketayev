async function implement(arr, start, end) {
    console.log(arr);
    if (start >= end) {
        return
    }
    let index = await partition(arr, start, end);
    await implement(arr, start, index - 1);
    await implement(arr, index + 1, end);
    return arr;
}

async function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; start <= end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

export default implement();