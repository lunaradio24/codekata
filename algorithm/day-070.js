// wallpaper[i][j]는 바탕화면에서 i + 1행 j + 1열에 해당하는 칸의 상태를 나타냅니다.
// wallpaper[i][j]는 "#" 또는 "."의 값만 가집니다.
// 바탕화면에는 적어도 하나의 파일이 있습니다.
// 드래그 시작점 (lux, luy)와 끝점 (rdx, rdy)는 lux < rdx, luy < rdy를 만족해야 합니다.

function solution(wallpaper) {
  const numRows = wallpaper.length;
  const numCols = wallpaper[0].length;
  // 기본값 설정
  let [lux, luy, rdx, rdy] = [numRows, numCols, 0, 0];
  // numRows, numCols를 돌면서
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // 탐색하다가 "#" 발견
      if (wallpaper[i][j] === "#") {
        if (i <= lux) lux = i; // 현재 lux 보다 왼쪽이면 lux 수정
        if (j <= luy) luy = j; // 현재 luy 보다 위쪽이면 luy 수정
        if (i >= rdx) rdx = i + 1; // 현재 rdx 보다 오른쪽이면 rdx 수정
        if (j >= rdy) rdy = j + 1; // 현재 rdy 보다 아래쪽이면 rdy 수정
      }
    }
  }
  return [lux, luy, rdx, rdy];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."])); // [1, 3, 5, 8]
console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."])); // [0, 0, 7, 9]
console.log(solution(["..", "#."])); // [1, 0, 2, 1]
