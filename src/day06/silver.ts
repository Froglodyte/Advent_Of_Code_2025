let input = (await Bun.file("src/day06/input.txt").text())
            .split("\n").map(line => line.trim().replace(/\s+/g, ' ').split(" "))
let sum = 0

for (let i = 0; i < input[0]!.length; i++) {
  let eqn = ""

  for (let j = 0; j < 4; j++)
    eqn = eqn + input[j]![i]! + input[4]![i]

  sum += eval(eqn.slice(0, -1))
}

console.log(sum)