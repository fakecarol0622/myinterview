路由是根据不同的url展示不同的内容，前端路由就是把这个工作由服务器转到前端来做。
Vue.js+Vue-router可以很简单的实现单页应用。

## 单页应用
单页应用（SPA）能够更新视图而不重新请求页面。
vue-router实现单页应用主要有Hash模式和History模式，通过mode参数决定使用哪一种。默认使用Hash。
1、Hash模式：
      hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也就是说 #是用来指导浏览器动作的，对服务器端完全无用，HTTP请求中也不会不包括#；同时每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置；

2、History模式：
    HTML5 History API提供了一种功能，能让开发人员在不刷新整个页面的情况下修改站点的URL，就是利用 history.pushState API 来完成 URL 跳转而无须重新加载页面；
    

## 安装

    npm install vue-router

## 引入

在src中的main.js里引入:

    import Vue from 'vue'
    import VueRouter from 'vue-router'
    Vue.use(VueRouter)//安装插件

## 配置路由
在router.js中配置路由

    import Home from '@/component/home'
    
    let router=new VueRouter({
        routes:[
            {
                path:'/home',//就是router-link的to属性的值
                component:Home
            }
        ]
    })
    

## 把路由对象传给Vue实例
在main.js中传实例

    new Vue({
        el: '#app',
        //让vue知道我们的路由规则
        router: router, //可以简写router
    })

## 在App.vue中定义router-link和router-view
router-link会默认被渲染成一个a标签，支持用户在具有路由功能的应用中点击导航。
（vue1.0中只能通过给a标签设置v-bind的方式）

设置to的值为要连接的路由的路径

    <router-link :to="{path:'/home'}"></router-link>
 router-view路由匹配的组件渲染在这里

     <router-view></router-view>

## 动态路由

主要用于点击列表项显示详情页的情景，页面结构基本相同，通过特定编号区分。
在一个路由中设置多个参数
在路径后面加上:id

    path:'/home/:id'
通过params指定具体的参数

    <router-link :to="{path:'/home',params:{id:1}}"></router-link>
 

参数值的读取

    export default {
        created () {
            const homeID = this.$router.params.id
        }
    }

## 嵌套路由
利用children属性可以定义一个路由的子路由
子路由的路径不需要加/，会自动添加到路由的路径之后

    routes:[
        {
            path:'/home',//就是router-link的to属性的值
            component:Home,
            children:[
                {name:content,path:'content',component:Content}
            ]
        }
    ]

## 其他
**transition组件**
vue2.0提供transition封装组件，实现一些组件的过渡效果。

transition只能有一个属性name，用于替换CSS类名中的`v-`
`v-enter`: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
`v-enter-active`: 定义进入过渡的结束状态。在元素被插入时生效，在transition/animation完成之后移除。
`v-leave`:定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
`v-leave-active`: 定义离开过渡的结束状态。在离开过渡被触发时生效，在transition/animation完成之后移除。

也只能有一个子元素，并且该子元素需要有v-if或v-show来控制是否显示。

    <transition name="fade">
       <p v-if="show">hello</p>
    </transition>
**导航的状态样式**
用户点击任意一个标签组件时，组件会处于激活状态。
默认的组件激活状态类名为router-link-active
可以通过active-class来设置激活类名：

    <router-link :to="{path:'/Home'}" active-class="active" ></router-link>
**命名路由**
有时通过name来标识一个路由可能会更方便

    routes:[
        {
            path:'/home',
            name:'home',
            component:Home
        }
    ]
链接到一个命名路由

    <router-link :to="{ name: 'home'}"></router-link>
**命名视图**
有时想要在同时或者同级展示多个路由，就可以用命名视图，为界面创建多个视图出口。

    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
在routes中的component里映射一下

    routes:[
        {
            path:'/home',
            name:'home',
            component:{
                a:Home,
                b:Main
            }
        }
    ]
**重定向与别名**
重定向就是将网络请求重新定向到另一个URL，用于网页转移到新地址等场景。
在routes中配置：

      routes:[
        {path:'/a',redirect:'/b'}
      ]
  别名就是给一个网页分配多个URL，无论访问哪一个URL得到的都是相同的网页。
  和重定向不同在于，输入/b，URL还是/b，但是网页跳转/a

      routes:[
        {path:'/a',alias:'/b'}
      ]

