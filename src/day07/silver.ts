let manifold = (await Bun.file("src/day07/input.txt").text()).split("\n").map(line => line.split(""))
let splits = 0;

function beam(x: number, y: number) {
  if (y == manifold.length) return
  if (manifold[y]![x]! == '|') return

  if (manifold[y]![x]! == '.') {
    manifold[y]![x]! = '|'
    beam(x, y+1)
  }

  if (manifold[y]![x]! == '^'){
    splits++
    beam(x-1, y)
    beam(x+1, y)
  }
}

beam(manifold[0]!.indexOf("S"), 1)
console.log(splits)