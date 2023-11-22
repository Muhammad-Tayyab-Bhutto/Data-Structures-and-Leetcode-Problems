// ============ Best With Respect To Time=================================
function heightChecker(heights: number[]): number {
    let count = 0;
    const original = [...heights]
    const expected = heights.sort((a,b) => a - b);
    
    for (let i = 0; i < heights.length; i++) {
        if (original[i] !== expected[i]) count++
    }
    
    return count;
};
// ==================Best With Respect To Space==============================
function heightCheckers(heights: number[]): number {
    return heights.map(element => element)
                  .sort((a, b) => a - b)
                  .reduce((accumulator, element, index) => element != heights[index] ? accumulator + 1 : accumulator, 0);
};