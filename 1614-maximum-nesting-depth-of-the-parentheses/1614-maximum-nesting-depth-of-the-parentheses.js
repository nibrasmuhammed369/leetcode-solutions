/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let ans = 0;

    for(let c of s){
        if(c === "("){
            depth++;
            ans = Math.max(ans,depth);
        }else if(c === ")"){
            depth--;
        }
    }
    return ans;
};