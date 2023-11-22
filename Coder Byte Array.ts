function ArrayChallenge(arr: number[]) {

    // code goes here  
    arr = arr.sort(function (a: number, b: number) { return a - b })
    let largestNumber: any = arr.pop();
    let sum = arr.reduce(function (x, y) { return x + y })
    for (let i = arr.length - 1; i >= 0; i--) {
        if (sum - arr[i] == largestNumber) {
            return true;
        }
        if (sum - largestNumber == 0) {
            return true;
        }
    }
    return false;
}

// keep this function call here 
// @ts-ignore
console.log(ArrayChallenge(readline()));