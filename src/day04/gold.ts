let grid = (await Bun.file("src/day04/input.txt").text()).split("\n").map(row => row.split(""));;
let sum  = 0;

while (true) {
  let toRemove = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i]!.length; j++) {            if (grid[i]![j] == '.') continue;
      let nghbrs = 0;
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          if (di == 0 && dj == 0) continue;
              
            let ni = i + di;
            let nj = j + dj;

            if (ni >= 0 && ni < grid.length && nj >= 0 && nj < grid[i]!.length)
              if (grid[ni]![nj] == '@') nghbrs++;

          }
        }
      if (nghbrs < 4) toRemove.push({ r: i, c: j });
    }
  }

  if (toRemove.length == 0) break;
  sum += toRemove.length;
  for (const { r, c } of toRemove)
    grid[r]![c] = '.'; 
}

console.log(sum);