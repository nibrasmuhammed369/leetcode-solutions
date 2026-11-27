/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const validNums = nums.filter((num) => num % 2 === 0 && num % 3 === 0);
    if (validNums.length === 0) return 0;
    return Math.floor(validNums.reduce((acc, num) => acc + num, 0) / validNums.length);  
};

averageValue([1,3,6,10,12,15])