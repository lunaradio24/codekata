// This new ride at an amusement park is very popular and runs nonstop.
// The original fee of this ride is price, but it is determined that when using the ride for the Nth time,
// the fee will increase as N times of the original fee.
// That is, if the original fee is 100, it will be 200 for the second time, and 300 for the third time.
// Write a function solution to return the insufficient money when the ride is used count times.
// However, return 0 when the owed amount is sufficient.

// Constraints
// Fee of ride price : natural number less than 2,500.
// The initial owned amount money : natural number less than 1,000,000,000.
// The number of rides count : natural number less than 2,500.

function insufficientMoney(price, money, count) {
  let totalFee = 0;
  for (let n = 1; n <= count; n++) {
    totalFee += price * n;
  }
  return money < totalFee ? totalFee - money : 0;
}
