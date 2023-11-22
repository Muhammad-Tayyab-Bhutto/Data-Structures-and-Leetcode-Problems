function sortedSquares(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++){
        nums[i] = Math.pow(nums[i], 2);
    }
    return nums.sort(function(a, b){ return a - b});
};