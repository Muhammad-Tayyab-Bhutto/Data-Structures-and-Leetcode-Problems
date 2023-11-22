function mostWordsFound(sentences: string[]): number {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < sentences.length; i++){
        count = 1;
        for (let j = 0; j < sentences[i].length; j++){
            if (sentences[i][j] === " "){
                count++;
            }
        }
        if (ans < count){
            ans = count;
        }
    }
    return ans;
};