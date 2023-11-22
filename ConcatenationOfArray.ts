function ConcatArray(nums: number[]){
    let j = 0;
    let size = nums.length;
    for (let i = size; i < size+size; i++){
        nums[i] = nums[j]; 
        j++;
    }
    return nums;
}

let arr4: number[] = [1, 2, 2]
console.log(ConcatArray(arr4));