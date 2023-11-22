function buildArray(nums: number[]): number[] {
    return nums.map((n, i, arr) => arr[n]);
};