function containsDuplicate(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
};
// ================================ Best Solution With Respect to Space=====================================
function containsDuplicateas(nums: number[]): boolean {
    return (nums.length !== new Set(nums).size);
};
//================================Best Solution With Respect to Time ========================
function containsDuplicates(nums: number[]): boolean {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
};