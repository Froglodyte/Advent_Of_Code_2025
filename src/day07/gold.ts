let manifold = (await Bun.file("src/day07/input.txt").text()).split("\n").map(line => line.split(""))
let cache = new Map<string, number>()

function beam(x: number, y: number) {
  if (y == manifold.length) return 1

  if (manifold[y][x] == '|') return 0

  const key = `${x},${y}`
  if (cache.has(key)) return cache.get(key)

  let count = 0

  if (manifold[y][x] == '.') count = beam(x, y + 1)

  if (manifold[y][x] == '^') count = beam(x - 1, y) + beam(x + 1, y)

  cache.set(key, count)
  return count
}

console.log(beam(manifold[0].indexOf("S"), 1))