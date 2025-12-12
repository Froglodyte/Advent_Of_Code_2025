let input = (await Bun.file("src/day08/input.txt").text())
            .split("\n").map((line) => line.split(",").map(Number))
let dists = []

for (let i = 0; i < input.length; i++) {
  for (let j = i+1; j < input.length; j++) {
    let dist = Math.sqrt(
    Math.pow(input[i][0] - input[j][0], 2) +
      Math.pow(input[i][1] - input[j][1], 2) +
      Math.pow(input[i][2] - input[j][2], 2),
    )
    dists.push([dist, i, j])
  }
}

dists.sort((a, b) => a[0] - b[0])

let parent = Array.from({ length: input.length }, (_, i) => i)

const find = (i) => {
  if (parent[i] == i) return i
  parent[i] = find(parent[i])
  return parent[i]
}

const union = (i, j) => {
  let rootA = find(i)
  let rootB = find(j)
  parent[rootA] = rootB
}

for (let k = 0; k < 1000; k++)
  union(dists[k][1], dists[k][2]);

let circuitSizes: Map<number, number> = new Map();

for (let i = 0; i < input.length; i++) {
  let root = find(i);
  circuitSizes.set(root, (circuitSizes.get(root) || 0) + 1);
}

let sizes = [...circuitSizes.values()].sort((a, b) => b - a).slice(0, 3);
console.log(sizes[0] * sizes[1] * sizes[2]);