const input = (await Bun.file("src/day02/input.txt").text())
            .split(",").map(range => range.split("-").map(Number))
let sum = 0

for (let rng of input) {
  for (let i = rng[0]!; i <= rng[1]!; i++) {
    let halfLen = i.toString().length/2
    if (i%10**halfLen == Math.floor(i/10**halfLen))
      sum += i
  }
}
console.log(sum);