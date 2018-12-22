var threeSum = function(nums) {
    var result=[];
    nums = nums.sort((a, b) => a - b);
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i]+nums[j]==-nums[k]){
                    let arr=[nums[i],nums[j],nums[k]];
                    result.push(arr);
                }else if(nums[i]+nums[k]==-nums[j]){
                    let arr=[nums[i],nums[k],nums[j]];
                    result.push(arr);
                }else if(nums[j]+nums[k]==-nums[i]){
                    let arr=[nums[j],nums[k],nums[i]]
                    result.push(arr);
                }
            }
        }
    }
    for(let i=0;i<result.length-1;i++){
        for(let j=i+1;j<result.length;j++){
            if(result[i][0]==result[j][0]&&result[i][1]==result[j][1]&&result[i][2]==result[j][2]){
                result.splice(i,1);
                j--;
            }
        }
    }
    return result;
};

console.log(threeSum([0,0,0,0]));