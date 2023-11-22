function maximumWealth(accounts: number[][]): number {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < accounts.length; i++){
        count = 0;
        for (let j = 0; j < accounts[i].length; j++){
            count += accounts[i][j]; 
        }
        if (ans < count){
            ans = count;
        }
    }
    return ans;
};