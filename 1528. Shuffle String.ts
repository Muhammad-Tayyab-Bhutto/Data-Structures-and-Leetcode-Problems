function restoreString(s: string, indices: number[]): string {
    let res: string[] = [];

    for (let i = 0; i < s.length; i += 1){
        res[indices[i]] = s[i];
    }
    return res.join('');
};