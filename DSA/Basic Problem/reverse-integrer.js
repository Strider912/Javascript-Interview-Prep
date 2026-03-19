/**
 * @param {number} 
 * @return {number}
 */
let reverse = function(num) {

    let originalNum = num
    let reverse = 0
    num = Math.abs(num)

    while(num > 0){
        let rem = num % 10
        reverse = (10 * reverse) + rem
        num = Math.floor(num / 10)
    }

    let limit = Math.pow(2,31)
    if (reverse < -limit || reverse > limit ) return 0
    
    return originalNum < 0 ? -reverse : reverse
};




const result = reverse(123)
const result2 = reverse(-123)
const result3 = reverse(120)

console.log({result, result2, result3});