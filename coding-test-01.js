function findMaxNum(array) {
  let max = array[0];
  array.forEach((element) => {
    if (max < element) {
      max = element;
    }
  });
  return max;
}

let arr = [2, 1, 6, 4, 5];
console.log(findMaxNum(arr));
