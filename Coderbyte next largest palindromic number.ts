function SearchingChallenge(num: number): number {

    // code goes here  
    let getReverse = (num: number) => {
      let revNum: number = +Math.abs(num).toString().split("").reverse().join("");
      if (num < 0) {
        revNum *= -1;
      }
      return revNum;
    }
    if (num >= -10 && num < 9) {
      return num + 1;
    } else if (num === getReverse(num)) {
      return num;
    } else {
      return SearchingChallenge(num + 1);
    }
  }
  
  // keep this function call here 
  // @ts-ignore
//   console.log(SearchingChallenge(readline()));
let num = 99;
console.log(SearchingChallenge(num));