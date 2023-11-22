function countGoodSubstrings(s: string): number {
    let count: number = 0;

    function checkIfDuplicateExists(str) {
        return new Set(str).size !== str.length
    }
    for (let i = 0; i < s.length; i++) {
        let substring: string = '';
        for (let j = 0; j < 3; j++) {
            substring += s[i + j];
        }
        if (!checkIfDuplicateExists(substring)) {
            count++;
        }
    }
    return count;
};

// ===========================================Best Solution With Respect to time=================
function countGoodSubstring(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] != s[i + 1] && s[i] != s[i + 2] && s[i + 1] != s[i + 2]) count++;
    }
    return count;
};

// ============================================Best Solution With Respect to Space=====================
function countGoodSubstringss(s: string): number {
    const LENGTH = 3;
    let ret = 0;

    for (let i = 0; i <= s.length - LENGTH; i++) {
        const substring = s.slice(i, i + LENGTH);
        if (new Set(substring).size === LENGTH) {
            ret++;
        }
    }
    return ret;
};