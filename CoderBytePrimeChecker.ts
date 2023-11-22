function MathChallenge(num: number[]): number {
  function initialize(num: number[]) {
    const arr = num.toString().split("");
    const resArr = [];
    for (let i = 0, len = factorial(arr.length); i < len; i++) {
      resArr.push(["", arr]);
    }
    return resArr;
  }
  function factorial(num: number): number {
    return num <= 1 ? 1 : num * factorial(num - 1);
  }

  function permStep(arr: number[]) {
    const arrCopy: any = Array.from(arr);
    let counter = 0;
    const len = arrCopy[0][1].length;
    const arrayLen = arrCopy.length;
    while (counter < arrayLen) {
      const targetArray = arrCopy[counter][1];
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < factorial(len - 1); j++) {
          const copyArray = Array.from(targetArray);
          const holder = copyArray.splice(i, 1);
          arrCopy[counter][0] = arrCopy[counter][0].concat(holder[0]);
          arrCopy[counter][1] = copyArray;
          counter++;
        }
      }
    }
    return arrCopy;
  }
  // isPrime is a function to convert each array element into a string, then test
  // to see if it is a prime.
  function isPrime(numString: string) {
    const stringNum = parseInt(numString, 10);
    const pivot = Math.ceil(Math.sqrt(stringNum));
    if (stringNum === 1) {
      return false;
    }
    if (stringNum === 2) {
      return true;
    }
    for (let i = 2; i <= pivot; i++) {
      if (stringNum % i === 0) {
        return false;
      }
    }
    return true;
  }
  const workingArray: any[] = initialize(num);

  while (workingArray[0][1].length > 0) {
    permStep(workingArray);
  }
  // this tidies up the array elements.
  const cleanWorkingArray = workingArray.map((val) => val[0]);

  for (let i = 0, WAlen = workingArray.length; i < WAlen; i++) {
    if (isPrime(cleanWorkingArray[i])) {
      return 1;
    }
  }
  return 0;
}
