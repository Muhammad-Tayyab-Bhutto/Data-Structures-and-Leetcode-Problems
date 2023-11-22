function decompressRLElist(nums: number[]): number[] {
    let res: number[] = [];
    let freq: number;
    for(let i = 0; i < nums.length; i++){
        if (i % 2 == 0){
            freq = nums[i];
        }
        if (i % 2 == 1){
            res.push(...Array(freq).fill(nums[i]));
        }
    }
    return res;
};