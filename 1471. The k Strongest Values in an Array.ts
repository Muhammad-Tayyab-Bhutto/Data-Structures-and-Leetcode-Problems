function shuffle(nums: number[], n: number): number[] {
    let res: number[] = [];
    let j = 0;
    for (let i = 0; i < n; i++){
        res[j] = nums[i];
        j += 2
    }
    j = 1;
    for (let i = n; i < nums.length; i++){
        res[j] = nums[i];
        j += 2;
    }
    
    return res;
};