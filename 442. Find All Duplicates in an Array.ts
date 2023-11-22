function findDuplicates(nums: number[]): number[] {
    const seen = new Set();
    const duplicates = nums.filter(n => seen.size === seen.add(n).size);
    return duplicates;
};