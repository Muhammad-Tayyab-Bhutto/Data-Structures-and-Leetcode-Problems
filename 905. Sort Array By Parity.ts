function sortArrayByParity(nums: number[]): number[] {
    let result: number[] = [];
    let rev: number = nums.length - 1;
    let i: number = 0;
    while (i < rev) {
        if (nums[i] % 2 != 0 && nums[rev] % 2 == 0) {
            [nums[i], nums[rev]] = [nums[rev], nums[i]];
            i++;
            rev--;
        }
        if (nums[i] % 2 == 0)
            i++;
        if (nums[rev] % 2 != 0)
            rev--;
    }
    return nums;
};

// ================================ Best Solution With Respect Time============================
function sortArrayByPariti(nums: number[]): number[] {
    let readPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[readPointer] % 2 !== 0) {
            const deletedItem = nums.splice(readPointer, 1);
            nums.push(deletedItem[0]);
        } else {
            readPointer++;
        }
    }

    return nums;
};

// =============================Best Solution With Respect to Time==============================
function sortArrayByParitys(nums: number[]): number[] {
    nums.sort((a, b) => a % 2 - b % 2)
    return nums;
};