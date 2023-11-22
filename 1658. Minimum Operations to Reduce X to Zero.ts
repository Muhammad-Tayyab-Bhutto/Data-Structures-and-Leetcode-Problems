// Two Pointer Approach 
function minOperations(nums: number[], x: number): number {
    let len: number = nums.length;
    let leftMost: number = 0;
    let s: number = 0;
    let rightMost: number = len - 1;
    let ans = -1;
    for (rightMost; leftMost < len && s < x; leftMost++) {
        s += nums[leftMost];
    }
    if (s == x) {
        ans = leftMost;
    }
    leftMost--;

    for (leftMost; leftMost >= 0; leftMost--) {
        s -= nums[leftMost];
        while (rightMost > leftMost && s < x) {
            s += nums[rightMost];
            rightMost--;
        }
        if (s == x) {
            if (ans == -1) {
                ans = (leftMost + len - rightMost - 1);
            }
            else {
                ans = Math.min(ans, (leftMost + len - rightMost - 1));
            }
        }
    }
    return ans;
};