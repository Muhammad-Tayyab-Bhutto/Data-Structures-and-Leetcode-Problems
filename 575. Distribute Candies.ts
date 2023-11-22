// =================================== Best Woth respect to time==================================
function distributeCandies(candyType: number[]): number {
    let set = new Set();
    for (let type of candyType) {
        set.add(type)
    }
    return Math.min(set.size, candyType.length / 2)
};

// =================================== Best Woth respect to Space==================================
function distributeCandiess(candyType: number[]): number {
    let result: number = 0;

    //get unique candies
    let typeOfCandy: Set<number> = new Set(candyType);
    let uniqueCandie: number = typeOfCandy.size;

    //Get total amount of candies
    let totalCandies: number = candyType.length / 2;
    //Select lowest between the two

    result = Math.min(totalCandies, uniqueCandie)
    return result;
};