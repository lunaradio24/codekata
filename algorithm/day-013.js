// Given a natural number N as the parameter,
// write a function solution to return the sum of each digit of N.
// For example, if N = 123, return 1 + 2 + 3 = 6.

function solution(n) {
  let quotient = n;
  let sum = 0;
  while (quotient > 0) {
    sum += quotient % 10;
    quotient = (quotient - (quotient % 10)) / 10;
  }
  return sum;
}
