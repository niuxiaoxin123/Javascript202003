// react-redux 
// Provider   connect 
// context : 上下文，用于数据传递
// props    redux    context 
// 父组件： childContextTypes={} getChildContext(){}
// 子组件   contextTypes={}
// Provider : 套在所有组件的外面，在内部render函数中，渲染所有的this.props.children,并且把store放到属性上，作为所有子孙组件的上下文；方便所有的子孙组件能够获取到store

// connect : 高阶函数
// mapStateToProps: 返回一个当前组件对应的state
// mapActionsToProps : 返回一个用dispatch包装之后actions的对象
// let connect=(mapStateToProps,mapActionsToProps)=>(Component)=>{
//     return class A extends React.Component{
//         render(){
//             return <Component></Component>
//         }
//     }
// }

// hook ：钩子函数， 是react16版本新增的；
// function Fn(){

// }
// class Bar extends



