const input = (await Bun.file("src/day11/input.txt").text()).split('\n')
let graph = new Map<string, string[]>()

for (let line of input) {
  const [source, destString] = line.split(": ")  
  graph.set(source, destString.split(" "))
}

const cache = new Map<string, number>()

function countPaths(start: string, end: string): number {
  if (start == end) return 1

  const key = `${start}->${end}`
  if (cache.has(key)) return cache.get(key)!

  const neighbors = graph.get(start) || []
  let paths = 0;

  for (const neighbor of neighbors)
    paths += countPaths(neighbor, end)

  cache.set(key, paths);
  return paths;
}

const dacFirst = countPaths("svr", "dac") * countPaths("dac", "fft") * countPaths("fft", "out")
const fftFirst = countPaths("svr", "fft") * countPaths("fft", "dac") * countPaths("dac", "out")
console.log(dacFirst + fftFirst)