//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return
function sum_evens_upto(num) {
  if (0 < num && num <= 1000) {
    let sum = 0;
    for (i = 1; 2 * i <= num; i++) {
      sum = sum + 2 * i;
    }
    return sum;
  } else {
    alert("Please put an integer between 0 and 1000");
  }
}
