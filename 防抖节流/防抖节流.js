//防抖
function debounce(fn,delay){
    let timer=null;
    return function(){
        let context=this;
        let args=arguments;

        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(context,args)  //使防抖函数最终返回的函数this和参数不变
        },delay);
    }
}

//节流
//时间戳版
function throttle(fn,delay){
    let prev=Date.now();
    return function(){
        let context=this;
        let args=arguments;
        let now=Date.now();
        if(now-prev>=delay){
            fn.apply(context,args);
            prev=Date.now();
        }
    }
}

//定时器版
function throttle(fn,delay){
    let timer=null;
    return function(){
        let context=this;
        let args=arguments;
        if(!timer){
            timer=setTimeout(()=>{
                timer=null;
                fn.apply(context,args)
            },delay)
        }
    }
}