Generator是ES6中新提出的一种异步编程解决方案。

可以将Generator理解为一个状态机，封装了多个内部状态。它与普通函数不同之处在于它可以暂停执行以及恢复执行。

## 语法
在function和函数名之间加*号以区分普通函数。
用yield来标识需要暂停的地方。

    function *gen(x){
      var y = yield x + 2;
      return y;
    }
 

## 使用next()方法恢复执行

直接执行Generator函数是不会返回结果的，而是返回一个指针对象。
使用next()方法，才会移动指针到第一个yield标识的语句，执行并返回一个对象，包括value属性和done属性。
value属性是yield后面的表达式的值，done属性是布尔值，表示这个Generator函数是否执行完毕。

    var g = gen(1);
    g.next() // { value: 3, done: false }
    g.next() // { value: undefined, done: true }
next()方法也可以接受参数，作为这个异步任务的返回value

    var g = gen(1);
    g.next() // { value: 3, done: false }
    g.next(2) // { value: 2, done: true }
   

## 错误处理
Generator函数内部可以使用try catch来进行错误处理，且可以用throw()方法抛出。

    function *gen(x){
      try {
        var y = yield x + 2;
      } catch (e){ 
        console.log(e);
      }
      return y;
    }
    
    var g = gen(1);
    g.next();
    g.throw（'出错了'）; //出错了

## 其他
**for of循环**
for of循环可以遍历Generator函数，无需调用next()方法。

    function *foo(){
      yield 1;
      yield 2;
      yield 3;
      yield 4
      return 5;
    }
    for(let v of foo()){
      console.log(v)
    }//1 2 3 4
以上方法在done属性为true的时候会终止，也就是不会显示return返回的值。

**this**
Generator函数中不绑定this，需要使用bind()进行绑定。
