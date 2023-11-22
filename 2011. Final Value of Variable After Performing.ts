function finalValueAfterOperations(operations: string[]): number {
    let plus = 0;
    let minus = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] == "X++" || operations[i] == "++X"){
            plus++;
        } else if(operations[i] == "X--" || operations[i] == "--X"){
            minus++;
        }
    }
    return plus - minus
};