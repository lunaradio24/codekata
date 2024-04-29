// Given a natural number N as the parameter,
// write a function solution to return the sum of each digit of N.
// For example, if N = 123, return 1 + 2 + 3 = 6.

function sumAllDigits(natural_num) {
  let quotient = natural_num;
  let sum = 0;
  while (quotient / 10 > 0) {
    sum += quotient % 10;
    quotient = Math.floor(quotient / 10);
  }
  return sum;
}
