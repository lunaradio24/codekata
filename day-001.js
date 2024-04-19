function solution(num1, num2) {
  if (-50000 <= num1 && num1 <= 50000 && -50000 <= num2 && num2 <= 50000) {
    return num1 - num2;
  } else {
    alert("Please put integers between -50000 and 50000");
  }
}
