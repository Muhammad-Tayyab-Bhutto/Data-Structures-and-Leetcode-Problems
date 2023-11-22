function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, "");
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
};

//==========================Best Solution ======================================
function isPalindromeStr(s: string): boolean {
    const str = s.trim().toLowerCase().replace(/[\W_]/g, '')
    const strReverse = str.split('').reverse().join('')
    
    return str === strReverse
};