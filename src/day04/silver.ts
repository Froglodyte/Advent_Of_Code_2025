const input = (await Bun.file("src/day04/input.txt").text()).split("\n")
let sum = 0

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i]!.length; j++) {
    if (input[i]![j] == '.') continue
    let nghbrs = 0

    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        if (di == 0 && dj == 0) continue

        let ni = i + di
        let nj = j + dj

        if (ni < 0 || ni >= input.length || nj < 0 || nj >= input[i]!.length) continue
        if (input[ni]![nj] == '@') nghbrs++
      }
    }

    if (nghbrs < 4) sum++
  }
}

console.log(sum)