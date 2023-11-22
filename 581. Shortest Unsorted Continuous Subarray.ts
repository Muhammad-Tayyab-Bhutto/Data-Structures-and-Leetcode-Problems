function findUnsortedSubarray(nums: number[]): number {
    let low: number = 0;
    let high: number = nums.length - 1;
    let arrayMin: number = Infinity;
    let arrayMax: number = -Infinity;
    while (low < nums.length - 1 && nums[low] <= nums[low + 1]) {
        low++;
    }

    // Array is sorted
    if (low === nums.length - 1) {
        return 0;
    }

    while(high >= 0 && nums[high] >= nums[high - 1]) {
        high--;
    }

    for(let i = low; i <= high; i++) {
        arrayMin = Math.min(arrayMin, nums[i]);
        arrayMax = Math.max(arrayMax, nums[i]);
    }

    while (low > 0 && nums[low - 1] > arrayMin) {
        low--;
    }

    while (high < nums.length - 1 && nums[high + 1] < arrayMax) {
        high++;
    }

    return high - low + 1;    
};