function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    let first: number = 0 // pointer for firstList
    let second: number = 0 // pointer for secondList
    let result = []

    while (first < firstList.length && second < secondList.length) {
        // largest starting point of the interval
        let maxStart = Math.max(firstList[first][0], secondList[second][0])

        // smallest end point of the interval
        let minEnd = Math.min(firstList[first][1], secondList[second][1])

        // if the intervals intersect
        if (maxStart <= minEnd) {
            result.push([maxStart, minEnd])
        }

        // move a pointer depending on which end point of the interval is smaller
        if (firstList[first][1] < secondList[second][1]) {
            first++
        } else {
            second++
        }
    }

    return result
};

// ================================Best Solution With Respect TO Time =================
function intervalIntersections(firstList: number[][], secondList: number[][]): number[][] {

    const res: number[][] = [];
    let i = 0;
    let j = 0;
    while (i < firstList.length && j < secondList.length) {
        const start = Math.max(secondList[j][0], firstList[i][0])
        const end = Math.min(firstList[i][1], secondList[j][1]);

        if (start <= end)
            res.push([start, end]);

        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }

    }
    return res;
};
// ============================best in memory
function intervalIntersectionss(firstList: number[][], secondList: number[][]): number[][] {

    const res: number[][] = [];
    let i = 0;
    let j = 0;
    while (i < firstList.length && j < secondList.length) {
        const start = Math.max(secondList[j][0], firstList[i][0])
        const end = Math.min(firstList[i][1], secondList[j][1]);

        if (start <= end)
            res.push([start, end]);

        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }

    }
    return res;
};
