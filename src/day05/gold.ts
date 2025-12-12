let ranges = (await Bun.file("src/day05/ranges.txt").text())
              .split("\n").map(line => line.split("-").map(Number))

let mergedRanges: [number, number][] = []
ranges.sort((a, b) => a[0] - b[0])

for (let [start, end] of ranges) {
    let len = mergedRanges.length;
    if (len == 0 || mergedRanges[len - 1][1] < start) {
        mergedRanges.push([start, end])
    } else {
        mergedRanges[len - 1][1] = Math.max(mergedRanges[len - 1][1], end)
    }
}

let count = 0;
for (let [start, end] of mergedRanges) {
    count += end - start + 1
}

console.log(count)