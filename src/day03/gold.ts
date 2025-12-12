let input = (await Bun.file("src/day03/input.txt").text()).split("\n")
let totalSum = 0n

for (let line of input) {  
  let digits = line.split("").map(Number)
  let dropCount = digits.length - 12
  let stack: number[] = []

  for (let dgt of digits) {
    while (dropCount > 0 && stack.length > 0 && stack[stack.length - 1] < dgt) {
      stack.pop()
      dropCount--
    }
    stack.push(dgt)
  }

  const resultString = stack.slice(0, 12).join("")
  totalSum += BigInt(resultString)
}

console.log(totalSum.toString())