function isAnagram(s: string, t: string): boolean {
    function reorderStr(str: string) {
	    return [...str].sort().join('');
    }
    let str1: string = reorderStr(s);
    let str2: string = reorderStr(t);
    
    return str1 === str2;

};