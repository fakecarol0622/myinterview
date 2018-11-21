function insertionSort(arr){
    var len=arr.length;
    for(var i=1;i<len;i++){
        var j=i-1;
        var current=arr[i];
        while(arr[j]>current){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}

var arr=[9,12,6,3,21,2,7,23,7];
var result=insertionSort(arr);
console.log(result);