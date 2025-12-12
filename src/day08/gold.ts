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
  if (find(i) == find(j)) return
  grpCount--
  let rootA = find(i)
  let rootB = find(j)
  parent[rootA] = rootB
}

let grpCount = input.length

for (let k = 0; k < dists.length; k++) {
  const [_, i, j] = dists[k];
  union(i, j);

  if (grpCount == 1) {
    let x1 = input[i][0]
    let x2 = input[j][0]
    console.log(x1 * x2)
    break
  }
}