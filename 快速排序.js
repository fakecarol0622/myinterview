//快速排序

//创建新数组
function quickSort(arr){
    if(arr.length<1){
        return arr;
    }
    var left=[];
    var right=[];
    var pivot=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot,quickSort(right));
}
const array=[18,5,2,7,9,23,3,26,68,1,2,45]
console.log(quickSort(array));

//替换
function swap(arr,a,b){
    var temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}
function partition(arr,left,right){
    var i=left;
    var pivot=arr[i];
    var j=right;
    while(i<j){
        while(arr[j]>=pivot)
        j--;
        if(i<j){
            swap(arr,i++,j);
        }//从右往左
        while(arr[i]<pivot)
        i++;
        if(i<j){
            swap(arr,i,j--);
        }//从左往右
    }
    return i;
}
function quickSort2(arr,left,right){
    if(left>right)
        return;
    var p_index=partition(arr,left,right);
    quickSort2(arr,left,p_index-1);
    quickSort2(arr,p_index+1,right);
}
const array2=[18,5,2,7,9,23,3,26,68,1,2,45];
quickSort2(array2,0,array2.length-1)
console.log(array2);