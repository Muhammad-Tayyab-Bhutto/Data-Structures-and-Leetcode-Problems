function backspaceCompare(s: string, t: string): boolean {
    function backspaced(str: string) {
        let stack: string[] = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        }
        return stack.join('');
    }
    return backspaced(s) === backspaced(t);
};