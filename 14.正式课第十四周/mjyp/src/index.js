import React from 'react';
import ReactDOM from 'react-dom';
import App from "./page/App";
ReactDOM.render(<div>
  <App></App>
</div>,document.getElementById('root'));
// create-react-app 如何配置less；让项目支持less；
// 当安装某些模块时，npm或yarn都有可能出现安装了一些新的模块的同时，也可能会删除一些模块，如果是这样，那么需要重新npm i  ;或yarn 重新跑环境；

// yarn  add  axios  redux  react-redux  react-router-dom   less less-loader ;
// yarn  add  redux-logger  redux-thunk  redux-promise;

// 讲项目：初始化以及项目的整个流程搭建；

// index.js : 是webpack打包的入口文件
// page : 有页面级组件级app.js; app.js是页面组件的入口;
// components: 页面中某一部分的组件
// api : 用于存储接口的文件夹
// store : 用于公共数据处理的store文件夹
// assets : 存储一些静态的css,图片


// 熟悉项目 
// 1.文件和模块的对应的关系；
// 2.路由和组件的对应关系;
// 3.一个完整的请求是怎么发送的；
// 4.如何更改一条公共的数据




