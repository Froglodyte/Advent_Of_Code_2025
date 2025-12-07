const input = (await Bun.file("src/day1/input.txt").text()).split("\n")
console.log(input)
let pswd = 0
let pos = 50

for (let turn of input) {
  let dir = turn[0]
  let steps = parseInt(turn.slice(1))
  if (dir === "R")
    pos = ((pos + steps) % 100 + 100) % 100
  else if (dir === "L")
    pos = ((pos - steps) % 100 + 100) % 100
  if (pos === 0) pswd++
}

console.log(pswd);