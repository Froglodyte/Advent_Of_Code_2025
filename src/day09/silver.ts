let coords = (await Bun.file("src/day09/input.txt")
            .text()).split("\n").map(n => n.split(",").map(Number))
let maxArea = 0;

for (let i = 0; i < coords.length; i++) {
  for (let j = i + 1; j < coords.length; j++) {
    let p1 = coords[i]
    let p2 = coords[j]

    let area = (Math.abs(p1[0] - p2[0]) + 1) * (Math.abs(p1[1] - p2[1]) + 1)
    maxArea = Math.max(maxArea, area)
  }
}

console.log(maxArea)
