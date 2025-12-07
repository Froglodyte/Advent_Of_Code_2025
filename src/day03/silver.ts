const input = (await Bun.file("src/day03/input.txt").text()).split("\n")
let sum = 0

for (let str of input) {
  let nums = str.split("").map(Number)
  let max = Math.max(...nums)
  let maxPos = nums.indexOf(max)

  if (maxPos == nums.length - 1) {
    let max2 = Math.max(...nums.slice(0, maxPos))
    sum += (max2 * 10) + max
  } 
  else {
    let max2 = Math.max(...nums.slice(maxPos + 1))
    sum += (max * 10) + max2
  }
}

console.log(sum);