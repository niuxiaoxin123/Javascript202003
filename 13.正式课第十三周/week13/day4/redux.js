
// state   getState   dispatch   subscribe
function createStore(reducer){
    // reducer： 是外界传递进来的；
    let state;// 存储数据的
    // 对state进行深度克隆返回
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners = []; 
    function dispatch(action){
        state=reducer(state,action);// state  action:{type:ADD_COUNT}
        // 每当dispatch都要触发订阅的方法
        listeners.forEach(item=>{
            if(typeof item==="function"){
                item();
            }
        });
    }
    dispatch({});// 为了初始化state;
    function subscribe(fn){
        listeners.push(fn);
        return ()=>{
            listeners.filter(item=>item!==fn);
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore;