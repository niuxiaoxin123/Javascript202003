// 准备一个createStore :
// 1. state  getState  dispatch  subscribe 
// 
function createStore(reducer){// reducer 是个函数
    let state;// {count:{num:68},todo:[]}
    // 对当前作用域下的state进行深克隆，并且返回
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    function dispatch(action){
        // 把reducer的返回值覆盖当前的state;reducer是自己写的
        state = reducer(state,action);
        // 循环事件池，让其中订阅的方法都执行一遍
        listeners.forEach(item=>{
            if(typeof item ==="function"){
                item();
            }
        })
    }
    dispatch({})// 为了给state初始值
    // 订阅方法；dispatch的时候，让订阅的方法执行;
    // subscribe的返回值再执行，是取消订阅，所以需要返回一个函数
    function subscribe(fn){
        // 执行subscribe的时候，把订阅的方法存放到事件池中
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
let combineReducers=(reducers)=>{
    return (state={},action)=>{
        let  obj = {};
        for(let key in reducers){
            obj[key]=reducers[key](state[key],action);
        }
        return obj;
    }
}
export  {
    createStore,
    combineReducers
};