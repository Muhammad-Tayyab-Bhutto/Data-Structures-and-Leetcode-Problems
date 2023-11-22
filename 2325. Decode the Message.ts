function decodeMessage(key: string, message: string): string {
    let cipher = {};

    let count = 0;
    for (let i = 0; i < key.length && count < 26; i++) {
        const char: string = key[i];
        if (cipher[char] == undefined && char !== " ") {
            cipher[char] = count;
            count++;
        }
    }
    let result:string = "";
    for (let char of message) {
        if (char !== " ") {
            result += String.fromCharCode(cipher[char] + "a".charCodeAt(0));
            // String.fromCharCode() converts an ascii value to its character equivalent
        } else {
            result += char;
        }
    }
    return result;
};