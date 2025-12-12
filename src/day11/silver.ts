const input = (await Bun.file("src/day11/input.txt").text()).split('\n')
let graph = new Map<string, string[]>()

for (let line of input) {
  const [source, destString] = line.split(": ")  
  graph.set(source, destString.split(" "))
}

const cache = new Map<string, number>()

function countPaths(node: string = "you"): number {
  if (node == "out") return 1
  if (cache.has(node))
    return cache.get(node)

  const neighbors = graph.get(node) || []
  
  let paths = 0
  for (const neighbor of neighbors)
    paths += countPaths(neighbor)

  cache.set(node, paths)
  return paths
}

console.log(countPaths())