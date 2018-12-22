var longestCommonPrefix = function(strs) {
    var first=strs[0];
    let result='';
    if(strs.length<1)
        return result;
    for(var i=0;i<first.length;i++){
        for(var j=1;j<strs.length;j++){
            if(first[i]!=strs[j][i])
                return result;
        }
        result+=first[i];
    }
    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));