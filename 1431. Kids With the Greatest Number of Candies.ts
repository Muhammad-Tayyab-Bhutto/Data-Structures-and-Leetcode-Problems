function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result = new Array(candies.length).fill(false);
    let max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result[i] = true;
        }
    } 
    return result;
};