## 什么是async

async其实是在ES7里出现的一种解决异步的方案。它是Generator函数的语法糖，本质上就是把Generator函数和自动执行器包装在一个函数中。



    async function fn(args){
      // ...
    }

等同于

    function fn(args){ 
      return spawn(function*() {
        // ...
      }); 
    }
这个spawn就是自动执行器

## 用法
在写法上，实际上就是把Generator函数中的*替换成async标识放在function的前面，然后把yield用await来代替。
async返回的是一个promise对象，可以使用then来添加回调函数。函数执行时遇到await就会让JS等待这个await后面的函数执行完并返回一个结果，才会继续执行下面的语句。

    async function getStockPriceByName(name) {
      var symbol = await getStockSymbol(name);
      var stockPrice = await getStockPrice(symbol);
      return stockPrice;
    }
    
    getStockPriceByName('goog').then(function (result){
      console.log(result);
    });
 

   await只能在async函数中使用。

## 优点
（1）**内置执行器**。相比Generator的执行必须要执行器，async不需要，它的执行与普通函数用法一样。
（2）**语义化**。async/await，从字面上比*号和yield更易理解它的作用。
（3）**适用性更广**。co 模块，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。


