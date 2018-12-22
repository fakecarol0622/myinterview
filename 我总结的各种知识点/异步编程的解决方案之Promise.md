Promise是一种异步解决方案，是对传统回调函数方法的一种改进。 

## 作用

（1）解决回调地狱，使函数顺序执行 
（2）使用then继续返回一个promise对象可以实现链式调用    

## 三种状态

pending(进行中)
resolved(成功)
rejected(失败)  

## 创建Promise实例

Promise对象是一个构造函数，接受一个函数作为参数，这个函数的两个参数分别是resolve和reject，分别会把promise对象的状态从pending改为resolved和rejected。



    var promise = new Promise(function(resolve,reject){
               //some code 
              if(//异步操作成功){
                 resolve(value);
                }else{
                 reject(error);
                }
        });

resolve用来在异步操作成功之后把结果传递出去。
reject用来抛出异步操作的错误。

## Promise.prototype.then()
then()是Promise实例的一种方法，用来指定两种状态的回调函数。
then接收两个回调函数作为参数。第一个是resolved的回调函数，第二个是rejected的回调函数。它们都接收promise对象传出的值作为参数。


    promise.then(
        function(value){
       //success
       },
        function(error){
       //failure
     });


## Promise.prototype.catch()

catch()方法是then()方法的第二个参数的语法糖，也可以用来捕获reject抛出的异常。
这个方法比使用then()的第二个参数的优点是还可以捕获到then()的第一个参数中抛出的错误。

      promise.then(function(){
        throw new Error()
      }, function(){
        // won't capture this error
      })
      .catch(function(){
        // will capture the error
      })
  then()和catch()均返回的是一个新的Promise对象，后面可以无限连接。

## Promise.all()
用于将多个Promise实例包装成一个新的Promise实例。

    var p=Promise.all([p1,p2,p3]);
p的状态由p1,p2,p3共同决定。
p1,p2,p3都为resolved时，p为resolved。
p1,p2,p3只要有一个为rejected,p为rejected。

## Promise.race()
也是将多个Promise实例包装成一个新的Promise实例。

    var p=Promise.race([p1,p2,p3]);
只要p1,p2,p3有一个最先改变状态，那么p的状态就跟着改变。

