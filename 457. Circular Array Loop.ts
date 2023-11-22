function nextIndex(arr: number[], movement: boolean, currentIndex: number): number {
    let direction = arr[currentIndex] >= 0;
    let nextIdx = (currentIndex + arr[currentIndex]) % arr.length;
    if (movement !== direction) {
        return -1;
    } if (nextIdx < 0) {
        nextIdx += arr.length;
    } if (nextIdx === currentIndex) {
        nextIdx = -1;
    }
    return nextIdx;
}
function circularArrayLoop(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        let moveForward = nums[i] >= 0;
        let slow = i;
        let fast = i;

        while (true) {
            slow = nextIndex(nums, moveForward, slow);
            if (slow === -1) {
                break;
            }
            fast = nextIndex(nums, moveForward, fast);

            if (fast === -1) {
                break;
            }
            fast = nextIndex(nums, moveForward, fast);

            if (fast === -1) {
                break;
            } if (slow === fast) {
                return true;
            }

        }
    }
    return false;
};

