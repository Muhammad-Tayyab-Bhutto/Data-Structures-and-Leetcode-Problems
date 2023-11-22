function thirdMax(nums: number[]): number {
    const set = new Set(nums.sort((a, b) => b - a));
    const val = set.values();
    if (set.size < 3) {
        return val.next().value;
    } else {
        val.next().value;
        val.next().value;
        return val.next().value;
    }
};
let arr: number[] = [3, 5, 6, 1, 5, 4, 2, 3];
console.log(thirdMax(arr));