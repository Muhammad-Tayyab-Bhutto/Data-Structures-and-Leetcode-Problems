function minimumRecolorss(blocks: string, k: number): number {
    let min: number = Infinity;
    let start: number = 0;
    let currentMinimum: number = 0;
    for (let end = 0; end < blocks.length; end++) {
        if (blocks[end] === 'W') currentMinimum++;
        if (end - start + 1 == k) {
            min = Math.min(currentMinimum, min);
            if (blocks[start++] === 'W') {
                currentMinimum--
            }
        }
    }
    return min;
};

// ===================================Best Solution With Respect To Time============================
function minimumRecolors(blocks: string, k: number): number {

    return Array.from(blocks).reduce((min, block, index, arr) => {
        let recolors = 0
        let coloured = 0

        arr.slice(index).forEach((block) => {
            if (recolors + coloured >= k) return
            if (block == 'B') coloured++
            if (block == 'W') recolors++
        })

        if (recolors + coloured < k) return min

        return Math.min(recolors, min)
    }, Infinity)
};

// ===================================Best Solution With Respect To Memory============================
function minimumRecolor(blocks: string, k: number): number {
    let whiteCount = 0;
    let minRecolors = Infinity;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < blocks.length; windowEnd++) {
        if (blocks[windowEnd] === 'W') whiteCount++;

        if (windowEnd - windowStart + 1 === k) {
            minRecolors = Math.min(minRecolors, whiteCount);
            // remove the windowStart, cautions if windowStart is white, 
            // decrease whiteCount
            if (blocks[windowStart] === 'W') { whiteCount--; }
            windowStart++;
        }
    }

    return minRecolors;
};
