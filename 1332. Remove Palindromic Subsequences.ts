function removePalindromeSub(s: string): number {
    if (!s) {
        return 0;
    }
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
            return 2;
        }
    }
    return 1;
};

// ============================================Best Solution With Respect To Time ============
function removePalindromeSubs(s: string): number {
    if (s.length === 0) return 0;
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        if (s[left] !== s[right]) return 2;
        left++;
        right--;
    }

    return 1;
};