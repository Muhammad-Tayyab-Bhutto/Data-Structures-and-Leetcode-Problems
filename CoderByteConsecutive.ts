function ArrayChallenge(arr: number[]): number { 

    // code goes here  
    arr.sort(function(a, b){ return a - b});
    let minNum: number = 0;
    for (let i = 1; i < arr.length; i++){
      minNum += Math.abs(arr[i] - arr[i - 1]) - 1;
    }
    return minNum; 
  
  }
     
  // keep this function call here 
  // @ts-ignore
  console.log(ArrayChallenge(readline()));