const input = (await Bun.file("src/day02/input.txt").text())
            .split(",").map(range => range.split("-").map(Number))
let sum = 0

for (let rng of input) {
  for (let i = rng[0]!; i <= rng[1]!; i++) {
    let n = i.toString()
    let len = n.length
    
    for (let j = 1; j <= Math.floor(len/2); j++) {
      if (len%j != 0) continue
      let seq = n.slice(0, j)
      if (seq.repeat(len/j) == n) {
        sum += i
        break
      }
    }
    
  }
}
console.log(sum);