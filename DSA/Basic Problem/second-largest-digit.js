/**
 * @param {string} 
 * @return {number}
 */
var secondHighest = function(s) {
      let max = -1;
    let secondMax = -1;

    for (let ch of s) {
        if (ch >= '0' && ch <= '9') {
            let num = Number(ch);

            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num < max && num > secondMax) {
                secondMax = num;
            }
        }
    }

    return secondMax;
};