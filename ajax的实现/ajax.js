function get(url,fn){
    var xhr=new XMLHttpRequest();//创建异步对象
    xhr.open('GET',url,true);//设置请求的参数（请求类型，url可带参数，异步true或同步false）
    xhr.send();//发送请求
    xhr.onreadystatechange=function(){//监听状态变化，执行相应的回调
        if(xhr.readyState==4&&xhr.status==200||xhr.status==304){//readyState==4说明请求已完成
            fn.call(this,xhr.responseText);
        }
    }
}

function post(url,data,fn){
    var xhr=new XMLHttpRequest();
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.open('post',url,true);
    xhr.send(data);
    xhr.onreadystatechange=function(){//监听状态变化，执行相应的回调
        if(xhr.readyState==4&&xhr.status==200||xhr.status==304){//readyState==4说明请求已完成
            fn.call(this,xhr.responseText);
        }
    }
}