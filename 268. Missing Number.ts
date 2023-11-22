function missingNumber(nums: number[]): number {
  let len: number = nums.length + 1;
  for (let j = 0; j < len; j++) {
    if (!nums.includes(j)) {
      return j;
    }
  }
}

// ===============================Best With respect to time =======================================
function missingNumbers(nums: number[]): number {
  let set = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
