import React from "react";
class Page extends React.Component{
    constructor(){
        super();
        this.state={header:"hello world",footer:"珠峰培训"}
    }
    changeFooter=()=>{
        this.setState({...this.state,footer:"回龙观东大街"});
    }
    changeHeader=()=>{
        this.setState({...this.state,header:"beijing zhufeng"})
    }
    render(){
        return <div>
            {this.state.header};<br></br>
            <button onClick={this.changeHeader}>更改header</button><br></br>
            <button onClick={this.changeFooter}>更改footer</button>
            <Demo footer={this.state.footer}></Demo>
        </div>
    }
}
// 当更改父组件的数据，子组件也引用了这个数据，那么子组件也会跟着更新，
//  React.PureComponent : 只要该组件依赖的属性没有发生变化，那么就不会调用更新及render的钩子函数；
class Demo extends React.PureComponent{
    constructor(){
        super();
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     // 判断两次的属性是否一致
    //     // 返回true，就继续向下执行，返回false，不再向下执行
    //     if(nextProps.footer===this.props.footer){
    //         return false;
    //     }
    //     return true;
    // }
    componentWillUpdate(){
        console.log("子组件 componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("子组件 componentDidUpdate")
    }
    render(){
        // 当父组件更新时，不管父组件的数据与子组件的属性是否有关，只要父组件调用了setState,那么都会重新执行子组件的render渲染函数；
        console.log("子组件 render");
        return <div>{this.props.footer}</div>
    }
}
export default Page;