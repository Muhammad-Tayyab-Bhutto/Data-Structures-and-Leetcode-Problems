function NearestSmallerValues(nums: number[]) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = i - 1; j > -1; j--) {
            if (arr[i] > arr[j]) {
                result.push(arr[j]);
                flag = true;
                break;
            }
        }
        if (!flag) {
            result.push(-1);
        }
    }
    return result;
}

let arr: number[] = [5, 6, 1, 2, 8]
console.log(NearestSmallerValues(arr))