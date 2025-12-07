const input = (await Bun.file("src/day01/input.txt").text()).split("\n")
let pswd = 0
let pos = 50

for (let turn of input) {
  let dir = turn[0]
  let steps = parseInt(turn.slice(1))
  
  if (dir == "R") {
    pswd += Math.floor((pos + steps) / 100) - Math.floor(pos / 100)
    pos += steps
  }
  if (dir == "L") {
    pswd += Math.floor((pos - 1) / 100) - Math.floor((pos - steps - 1) / 100)
    pos -= steps
  }
}

console.log(pswd)