function generateParenthesis(n: number): string[] {
    let res: string[] = []
    let iterate = (str: string, open: number, close: number) => {
        if (open > n || close > n || close > open) return;
        if (str.length == n * 2 && open == close) {
            res.push(str)
            return;
        }
        iterate(str + '(', open + 1, close)
        iterate(str + ')', open, close + 1)
    }
    iterate('', 0, 0)
    return res;
};

// ============================= Best Solution======================
const generate = (str, open, closed, n) => {
    if (str.length === n * 2) {
        return [str];
    }

    const result = [];
    if (open < n) {
        result.push(...generate(str + '(', open + 1, closed, n));
    }

    if (closed < open) {
        result.push(...generate(str + ')', open, closed + 1, n));
    }

    return result;
}

function generateParenthesis(n) {
    return generate('', 0, 0, n);
};