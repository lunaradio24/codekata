function bubbleSort(array) {
  for (let l = array.length; l > 1; l--) {
    for (let i = 0; i < l - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

function selectSort(array) {
  // index at which the minimum will be put
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    // target index to find the minimum
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    let min = array[minIdx];
    array[minIdx] = array[i];
    array[i] = min;
  }
  return array;
}

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

console.log(insertSort([4, 6, 2, 9, 1]));
