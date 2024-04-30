// ※ Use Standrad input and output to solve this challenge
// Print a n by m grid of asterisks.

// Constrratins
// The first line contains 2-separated integers, n and m.
// 1 ≤ n, m ≤ 1,000

function asterisksGrid(numRows, numCols) {
  let grid = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      grid += "*";
    }
    grid += "\n";
  }
  return grid;
}
