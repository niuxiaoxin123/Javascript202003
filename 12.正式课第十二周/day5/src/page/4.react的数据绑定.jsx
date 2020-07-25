import React from "react";
import ReactDOM from "react-dom";
import { func } from "prop-types";
// 在真实的项目中，那么经常根据后端返回的数据进行渲染视图；axios fetch 
let ary=[{name:"杨羽鹤",age:18},{name:"杨光",age:20},{name:"纪安",age:21}];
// 原生js : 字符串拼接  innerHTML 
// vue  :v-for
// react : 数组的map;一条数据映射出一个react元素;将数据映射成react元素，每一个react元素都需要有一个key属性,key不能重名，代表唯一性；
// 根据数据渲染一个列表；
let  list=<ul>
    {ary.map((item,index)=>{
        // 根据return 返回一个react元素；
        // key的属性值应该用{}动态取到该项的索引；
        // key具有唯一性
        return <li key={index}>{item.name}{item.age}</li>
    })}
    {/* {[<li>杨羽鹤</li>,<li>杨光</li>,<li>杨光</li>]} */}
</ul>

let arr = [1,2,3,4,5];
let newArr = arr.map(function(item){
    // map循环每一项
    // 根据这个回调函数的返回值来映射出一个新的数组来；
    return item+1;
});
console.log(newArr);


ReactDOM.render(list,document.querySelector("#root"));