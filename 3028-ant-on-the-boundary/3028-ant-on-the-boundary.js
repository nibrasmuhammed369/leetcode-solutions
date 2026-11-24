/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let result = 0;
    let sum = 0;

    for(let num of nums){
        sum += num;
        if(sum == 0)result++;
    }
    return result;
};