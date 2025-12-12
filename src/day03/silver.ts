const input = (await Bun.file("src/day03/input.txt").text()).split("\n")
let sum = 0

for (let str of input) {
  let digits = str.split("").map(Number)
  let max = Math.max(...digits)
  let maxPos = digits.indexOf(max)

  if (maxPos == digits.length - 1) {
    let max2 = Math.max(...digits.slice(0, maxPos))
    sum += (max2 * 10) + max
  } 
  else {
    let max2 = Math.max(...digits.slice(maxPos + 1))
    sum += (max * 10) + max2
  }
}

console.log(sum);