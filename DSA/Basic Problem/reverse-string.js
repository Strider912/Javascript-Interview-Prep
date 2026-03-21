/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function(s) {
    
    strLength = s.length;
    let haflLength = Math.floor(s.length/2)

    for(let i=0; i<haflLength; i++){
        let temp = s[i]
        s[i]= s[strLength-1-i]
        s[strLength-1-i] = temp
    }
};

const result = reverseString(["h","e","l","l","o"])
const result2 = reverseString(["H","a","n","n","a","h"])

console.log({result, result2});