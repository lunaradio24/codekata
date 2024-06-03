//compare two integers and return 1 if they are the same and -1 if they are not.
function compare(num1, num2) {
  if (0 <= num1 && num1 <= 10000 && 0 <= num2 && num2 <= 10000) {
    if (num1 == num2) {
      return 1;
    } else {
      return -1;
    }
  } else {
    alert("Please put integers between 0 and 10000");
  }
}
