let helpers: any;
let MovingMedian = (arr: number[]) => {
    let buildArr = [];
    let winLength: any = arr.shift();
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let firstIndex = Math.max(0, (i - winLength) + 1);
        let med = helpers.getMedian(arr.slice(firstIndex, i + 1));
        buildArr.push(med);
    }
    return buildArr.join(',');
};

helpers = {
    getMedian(arr: number[]) {
        arr.sort((a, b) => a - b);
        let len = arr.length;
        if (len % 2) {
            return arr[Math.floor(len / 2)];
        }
        return (arr[(len / 2) - 1] + arr[len / 2]) / 2;
    }
};
// let arr: number[] = [3, 1, 3, 5, 10, 6, 4, 3, 1];
let arr: number[] = [3, 0, 0, -2, 0, 2, 0, -2];

console.log(MovingMedian(arr))