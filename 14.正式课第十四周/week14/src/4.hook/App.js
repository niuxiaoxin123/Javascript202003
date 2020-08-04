import React,{useState, useReducer} from "react";
// hook: 钩子函数；
// 组件有状态 有生命周期 有this;

function App(){
    let [state,setState]=useState(function(){
        // useState可以传一个函数
        return {m:0,n:100}
    })
    return <div>
        {state.m}
        {state.n}
        <button onClick={()=>{
            // 传递进去的值会把原来的state值给覆盖；
            setState({
                ...state,
                n:200
            })
        }}></button>
    </div>
}

// function App(){
//     let [m,setStateM] = useState(100);
//     let [n,setStateN]  = useState(200);
//     return <div>
//         {m}
//         {n}
//         <button onClick={()=>{
//             // 传递进去的值会把原来的state值给覆盖；
//             setStateM(300);
//             setStateN(600)
//         }}></button>
//     </div>
// }
// function App(){
//     // 当改变state之后，会让组件自动更新；
//     // useState第一个参数就是状态
//     let [state,setState]=useState({
//         m:0,
//         n:0
//     });
//     return <div>
//         {state.m}
//         {state.n}
//         <button onClick={()=>{
//             setState({
//                 ...state,
//                 n:100
//             })
//         }}>+</button>
//     </div>
// }

// 基本数字
// function App(){
//     let [a,changeA] = useState(100);// 这个是定义状态的hook;
//     // useState : 会返回一个数组
//     // useState();第一个参数是创建的state初始值； 第二个参数是个函数，这个函数是用来更改state;
//     // 更改的state的方法执行时，穿进去的实参就会覆盖原来的state
//     // console.log(useState(100));
//     return <div>
//         {a}
//         <button onClick={()=>{changeA(a+1)}}>+</button>
//     </div>
// }
// class定义类相当于function肯定是消耗性能的；而且执行起来比较复杂；
// class App extends React.Component{
//     constructor(){
//         super();
//         console.log(11000)
//     }
//     render(){
//         return <div>123456</div>
//     }
// }
export default App;