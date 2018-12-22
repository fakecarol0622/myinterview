//非递归
function binary_search(arr,key){
    var low=0,high=arr.length-1;
    while(low<=high){
        var mid=parseInt((high+low)/2);
        if(key==arr[mid]){
            return mid;
        }else if(key>arr[mid]){
            low=mid+1;
        }else if(key<arr[mid]){
            high=mid-1;
        }else{
            return -1;
        }
    }
}

//递归
function binary_search2(arr,low,high,key){
    if(low>high)
        return -1;
    var mid=parseInt((high+low)/2);
    if(arr[mid]==key){
        return mid;
    }else if(key>arr[mid]){
        low=mid+1;
        return binary_search2(arr,low,high,key);
    }else if(key<arr[mid]){
        high=mid-1;
        return binary_search2(arr,low,high,key);
    }else
        return -1;
}

var array=[1,2,3,4,5,6,7,8,9,10,14,16,18,22,25,29];
var result=binary_search(array,22);
var result2=binary_search2(array,0,15,22);
console.log(result);//返回目标索引值
console.log(result2);