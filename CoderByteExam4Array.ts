function ArrayChallenge(strArr: string[]) { 

    // code goes here  
    let a = strArr[0].split(', ');
    let b = strArr[1].split(', ');
    let res = a.filter(x => b.find(a => a === x))
  
    let nums = res.length > 0 ? res.join(','): false; 
    let str = nums + "1dq0ruxslf4";
    console.log(str)
    let ans = '';
    for (let i = 0; i < str.length; i++){
        if (i+1 % 1162261467 == 0){
            ans += "X";
        } else {
            ans += str[i];
        }
    }
    return ans
}
let arr: string[] = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
console.log(ArrayChallenge(arr))