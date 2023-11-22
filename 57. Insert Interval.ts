function insert(intervals: number[][], newInterval: number[]): number[][] {
    let len: number = intervals.length
    let idx: number = 0
    let i: number = 0
    // insert interval based on newInterval[0]
    // note: can be improved by using binary search

    while (idx < len) {
        if (intervals[idx][0] >= newInterval[0]) {
            break
        }
        idx++
    }

    intervals.splice(idx, 0, newInterval)

    // after the newInterval is inserted
    // we need to handle overlapping intervals
    // run until i is the last index on intervals
    while (i < intervals.length - 1) {

        // does not overlap
        if (intervals[i][1] < intervals[i + 1][0]) {
            i++
            continue
        }

        // overlap
        intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1])

        // intervals[i] has absorbed intervals[i+1]
        // remove intervals[i+1]
        intervals.splice(i + 1, 1)
    }

    return intervals
}