import React from "react";
class App extends React.Component{
  constructor(){
     super();
     this.state={num:0}
     this.add = this.add.bind(this);
     // 只会执行一次；this==> 组件实例；
     this.color={color:"red"};
  }
  // add(){
  //    // 这种函数是没有的this，this指向了undefined
  //    this.setState({
  //       num:this.state.num+1
  //    });
  // }
  add=()=>{
    // 这种函数是没有的this，this指向了undefined
    this.setState({
       num:this.state.num+1
    });
 }
  render(){
    // this ==> 组件的实例；生命周期的钩子函数的this指向组件实例；
    // 当属性或状态发生改变，都会执行render函数让视图更新；
    // 当视图更新时，render会再次执行，会进行DOM以及对象之间的比较
    // 由于数据更新，会导致render再次执行，所以尽可能的在render之前提前把信息准备好
    return <div>
        {this.state.num}
        {/* <button onClick={this.add.bind(this)}>第一种</button> */}
        {/* <button onClick={this.add}>第二种</button> */}
        {/* this指向组件实例 */}
        <button onClick={()=>{this.add()}}>第三种</button>
        <button onClick={this.add}>第四种</button>
        {/* 每次执行render都会认为是一个新的对象 */}
        <span style={this.color}>{this.state.num}</span>
    </div>
  }
}
export default App;