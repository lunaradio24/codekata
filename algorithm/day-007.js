//num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분 return
function division(num1, num2) {
  if (0 < num1 && num1 <= 100 && 0 < num2 && num2 <= 100) {
    return parseInt((num1 / num2) * 1000);
  } else {
    alert("Please put integers between 0 and 100");
  }
}
