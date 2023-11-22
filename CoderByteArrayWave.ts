function ArrayChallenge(arr: number[]): boolean {
  
    // code goes here  
    let helper = {
      freqCheck(arr: number[]) {
        let count: number[] = [];
        arr.forEach((val: any) => {
          let valStr: number = val.toString();
          if (!count[valStr]) {
            count[valStr] = 1;
          } else {
            count[valStr] += 1;
          }
        });
        return count;
      }
    }
    let count = helper.freqCheck(arr);
    let arrayKeys = Object.keys(count);
    let countarr = arrayKeys.map((val: any) => count[val]);
    let maxCount = Math.max(...countarr);
    return maxCount <= arr.length / 2;
  
  }
  
  // keep this function call here 
  // @ts-ignore
  console.log(ArrayChallenge(readline()));