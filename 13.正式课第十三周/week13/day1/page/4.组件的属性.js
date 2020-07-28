import React,{Component} from "react";// React会接受一个对象，里面createElement  Component
import ReactDOM from "react-dom";
// React.Component
class Bar extends Component{
    constructor(props){
        // 如果有constructor,里面必须调用super;construtor不是必须的；但是render函数必须有
        super();
        // console.log(this.props);// undefined :construtor执行的时间早于render；此时实例没有props属性；
        console.log(props);
    }
    render(){// render的参数是没办法接收到行间传递过来的属性的
        // render函数必须有，render函数中的return也必须有
        // console.log(this);// render函数的this指向组件实例； 
        // render是一个函数，里面是一个作用域；可以任意写代码
        // let v=1;
        // if(1==1){}
        // for(){}
        // 返回一个react元素；react元素是react组件基本组成单位；
        // console.log(attrs);
        return <div>{this.props.a}</div>;
    }
}
// 在vue中data中的数据发生改变，视图更新，在react中，只有属性或者状态发生改变，那么这个视图就会更新；
// 属性改变,视图也会跟着更新
let num= 1;
setInterval(()=>{
    num+=1;
    // num 每隔1秒都会+1;并且传过去的属性在更新；视图就会更新
    ReactDOM.render(<Bar a={num}></Bar>,document.querySelector("#root"));
},1000);
// 传递过去的数据永远是1；
// ReactDOM.render(<Bar a={num}></Bar>,document.querySelector("#root"));