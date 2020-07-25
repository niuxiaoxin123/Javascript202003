import React from "react";
import ReactDOM from "react-dom";
import "./3.index.less";// 引入css;
let obj ={name:"斌哥"};
var sex="男";
function fn(){
    return <a href="">百度一下</a>;
}
let ary = [<li key="1">河北</li>,<li key="2">河南</li>,<li key="3">山西</li>]
let ele  =<div>
    <span>{obj.name}</span>
    <div>{sex}</div>
    <div>{3<1?"珠峰":"培训"}</div>
    {/* <div>{obj}</div> */}
    <div>{fn()}</div>
    <div>{[1,2,3,4]}</div>
    <div>{ary}</div>
    <div>{100+100}</div>
    <div>{null}</div>
    <div>{undefined}</div>
    <div>{false}</div>
    <div>{true}</div>
    <div className="num" style={{color:"red",marginRight:"10px"}}>{0}</div>
    <div>{"NaN"}</div>
    <div className="box">
        一哥迟到了
        <p>需要叫醒服务</p>
    </div>
    <label htmlFor="name"></label>
</div>

// JSX语法;
// 1. 通过{}去取值，取得是当前作用域下的值；
// 2. 大括号中支持三元运算符；
// 3. 对象不能直接作为react的子元素，不能放在{}中
// 4. 函数也不能作为react的子元素，但是可以在{}中让函数执行；页面最终会渲染函数的执行结果；
// 5. 大括号是可以直接放数组的；会把数组每一项渲染到页面中；如果数组中每一项都是一个react元素，那么最终会把这些react元素一起放到大括号中渲染；在react中，经常是把后端返回的数据映射成一个都是react元素的数组，最终放到页面中；
// 6. {}支持表达式
// 7. null 、undefined、true、false、[] 不会显示；
// 8. 行间属性不能直接使用class关键字；在react中class有特殊的意义，需要写样式，用className代替；在react元素label使用属性，把for换成htmlFor
// 9.jsx元素中，行间属性style的属性值需要用{{}}包起来，如果样式中出现-；需要将其转成驼峰的方式 margin-right==>marginRight

ReactDOM.render(ele,document.querySelector("#root"));
