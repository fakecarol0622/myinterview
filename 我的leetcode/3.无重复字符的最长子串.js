var lengthOfLongestSubstring = function(s) {
    var start=0;
    var max=0;
    let map={};
    for(var i=0;i<s.length;i++){
        var v=s[i];
        if(map[v]>=start){
            start=map[v]+1;
        }
        map[v]=i;
        if(max<i-start+1){
            max=i-start+1;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('abbbbb'));