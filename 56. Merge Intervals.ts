function merge(intervals: number[][]): number[][] {
    intervals.sort(function (a, b) { return a[0] - b[0] });
    let res: number[][] = [[intervals[0][0], intervals[0][1]]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res[res.length - 1][1]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        } else {
            res.push(intervals[i])
        }
    };
    return res;
}