function countSubTrees(n: number, edges: number[][], labels: string): number[] {
    let arr = Array.from(Array(n), () => new Array());
    let charArray = new Array(26).fill(0)

    for (let [x, y] of edges) {
        arr[x].push(y)
        arr[y].push(x)
    }

    let res = new Array(n).fill(0)
    let iterate = (index: number, prev: number, char: any) => {
        let total = char[labels.charCodeAt(index) - 97]
        char[labels.charCodeAt(index) - 97]++

        for (let i of arr[index]) {
            if (i == prev) continue;
            iterate(i, index, char)
        }
        res[index] = char[labels.charCodeAt(index) - 97] - total
    }
    iterate(0, -1, charArray)
    return res
};