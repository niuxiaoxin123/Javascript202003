import React from "react";
import ReactDOM from "react-dom";
class Panel extends React.Component{
    constructor(){
        super();//如果该组件需要状态，那么需要写constructor
        this.state={num:100,a:200}
    }
    change=(e,key)=>{
        // console.log(key);
        this.setState({
            [key] :e.target.value // 从input框的value值来获取；
        })
    }
    render(){
        console.log(100);
        
        return <div>
                   <p>{this.state.num}</p>
                   {/* 希望将状态的值放到input框中 */}
                   {/* 表单元素，如果只有value属性，那么这将是只读的input框 */}
                   {/* 在react如果使用表单元素，记得给表单元素加上onChange事件 */}
                   {/* onChange事件每当改变value值时，就会执行 ,把input框中的value值赋值给state中的num*/}
                   {/* 表单类的元素受状态的控制，这类组件就是受控组件； */}
                   {/* <input value={this.state.num} onChange={(e)=>{this.change(e)}}></input> */}
                   {/* <input value={this.state.num} onChange={this.change.bind(null)}></input> */}
                   <input value={this.state.num} onChange={(e)=>{this.change(e,"num")}}></input>
                  <input value={this.state.a} onChange={(e)=>{this.change(e,"a")}}></input>
                   {/* <input value={500} onChange={(e)=>{e.target.value=888}}></input> */}
                   <input defaultValue={this.state.num}></input>
               </div>
    }
}
ReactDOM.render(<Panel></Panel>,document.querySelector("#root"));