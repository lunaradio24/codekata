// ※ Use Standard input and output to solve this challenge
// Print a n by m grid of asterisks.

// Constraints
// The first line contains 2-separated integers, n and m.
// 1 ≤ n, m ≤ 1,000

function asterisksGrid(data) {
  const n = data.split(" ");
  const numRows = Number(n[1]);
  const numCols = Number(n[0]);
  const row = Array(numCols).fill("*").join("");
  for (let i = 0; i < numRows; i++) {
    console.log(row);
  }
}

asterisksGrid("5 3");
