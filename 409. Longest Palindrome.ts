function longestPalindrome(s: string): number {
    let longest = 0;
    let keys = {};

    for (const char of s) {
        // Keep track of character count in the keys object
        keys[char] = (keys[char] || 0) + 1;
        // If add 2 to the longest variable everytime we hit an even number count
        if (keys[char] % 2 == 0) longest += 2;
    }
    // If s.length is greater than longest then we know that we can add a unique char in the middle of the palindrome
    return s.length > longest ? longest + 1 : longest;
};

// =========================================Best With Respect To Time=================================
function longestPalindrome(s: string): number {
    const couples = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!couples.get(s.charCodeAt(i))) {
            couples.set(s.charCodeAt(i), 1);
        } else {
            couples.set(s.charCodeAt(i), couples.get(s.charCodeAt(i)) + 1);
        }
    }
    let totalCouples = 0;
    let centerSingle = 0;
    couples.forEach(couple => {
        if (couple % 2) {
            centerSingle = 1;
            totalCouples += couple - 1;
        } else {
            totalCouples += couple;
        }
    })
    return totalCouples + centerSingle;
};

// =========================================Best With Respect To Space=================================
/**
  - iterate over the string
  - store number of letter occ in a map - {[letter]: occ}
  - iterate over map to update maxLength variable as:
  - the maxLength can sum up if maxLength value is:
    - even + (odd | even), odd + (even)
  - to odd number of letter occ can be added even, to even odd?

  [1]: aaaa[even] -> aaaa[even] + ww[even] -> waaaaw[even] + rrrrr[odd] -> waarrrrraaw[odd] + ss[even]
        -> swaarrrrraaws[odd] + kkk[odd] -> iii 
*/

function longestPalindrome(s: string): number {
    let maxLength: number = 0;
    const occMap = {};

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (letter in occMap) {
            occMap[letter] += 1;
        } else {
            occMap[letter] = 1;
        }
    }

    let skipOdd = false;

    for (const key in occMap) {
        const occNum = occMap[key];

        if (occNum % 2 === 0) {
            maxLength += occNum;
        } else {
            if (skipOdd) {
                maxLength += occNum - 1;
            } else {
                maxLength += occNum;
            }
            skipOdd = true;
        }
    }

    return maxLength;
};