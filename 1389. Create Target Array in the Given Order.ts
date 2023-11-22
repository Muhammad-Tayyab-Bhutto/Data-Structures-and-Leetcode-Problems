function createTargetArray(nums: number[], index: number[]): number[] {
    let targatedArray: number[] = new Array(nums.length);
    for (let i = 0; i < nums.length; i++){
        for (let j = targatedArray.length-1; j > index[i]; --j){
            targatedArray[j] = targatedArray[j-1];
        }
        targatedArray[index[i]] =  nums[i];
    }
    
    return targatedArray;
};