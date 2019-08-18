# my-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#技术栈
-----------------------------------------------
前端：vue2+vuex+axios+vue-router+ES6+Element-ui+echarts
后端：node.js

#技术概要
----
用nodejs简单模拟了一个服务器，然后在器vue中设置了路由守卫，其数据的请求用的是axios，数据的管理是vuex,并运用到了vue-router对页面进行了路由配置，效果展示方面使用了element-ui框架，该demo基本运用上了所有vue常见的技术，管道过滤filter以及全局自定义指令directive。

#项目运行
----------
运行前请先安装node.js

clone项目到本地

`git clone https://github.com/Shawn-yu1/Shawn-yu1.github.io.git `


为了确保运行正确，请先运行后端服务。再运行前端


#组件
----
组件的原则就是尽量将复杂的UI布局划分成单个晓得UI组件，逻辑处理也被划分成更多的单个晓得逻辑。数据流动采用的单向数据流动。子组件的数据更多的是来自于父组件，父组件的数据主要是其本身发起的ajax请求。本项目中ajax请求库使用的是axios.

#状态管理
---------
大型复杂项目的状态管理采用的是vuex。在这里应用vuex只是对于该技术的练习，不是所有的项目都适合vuex的使用
