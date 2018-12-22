# 原型

**原型**是一个对象，通过原型可以实现对象的属性继承。

JavaScript中，只有函数才有prototype属性。_proto_是每个对象都拥有的属性。

这两个属性就是new的过程实现的关键。
当一个函数被用作构造函数来创建实例时，这个函数的prototype属性值会被作为原型赋值给对象实例，也就是会被赋给实例对象的_proto_属性。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181128214302120.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWkwNjIy,size_16,color_FFFFFF,t_70)

**new的过程**：
1.创建一个空对象`var obj={};`
2.将这个对象的constructor属性设为构造函数的名称。
3.将这个对象的_proto_属性指向构造函数的prototype。`obj._proto_=ClassA.prototype;`
4.用这个对象调用构造函数，函数中的this被指向这个对象。`ClassA.call(obj);`
5.将初始化完毕的对象地址保存在等号左边的变量中。

# 原型链

由于_proto_是任何对象都拥有的属性，每个对象的_proto_属性指向它构造函数的prototype，而这个构造函数的prototype又有自己的_proto_，因此会形成一个_proto_链条，最后一个是Object的prototype的_proto_，值为null，这个链条就是**原型链**。

当JS查找一个对象的属性时，会先查找对象本身是否存在该属性，若不存在就会去原型链上查找，一直找到null为止。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181128214335779.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWkwNjIy,size_16,color_FFFFFF,t_70)

原型链是实现继承的主要方法。
