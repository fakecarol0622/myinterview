function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    var middle=parseInt(arr.length/2);
    var left=arr.slice(0,middle);
    var right=arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    var result=[];
    while(left.length>0&&right.length>0){
        if(left[0]<right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    while(left.length)
    result.push(left.shift());
    while(right.length)
    result.push(right.shift());
    return result;
}

var arr=[9,12,6,3,21,2,7,23,7];
var result=mergeSort(arr);
console.log(result);