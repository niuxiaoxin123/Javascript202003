import * as Types from "../action-types"
let initState={num:0}
function counter(state=initState,action){
    switch(action.type){
        case Types.ADD_COUNT:
            return {...state,num:state.num+action.n}
        case Types.MIN_COUNT:
            return {...state,num:state.num-action.m}
    }
    return state;
}
// vue-devtool : 能够让程序跟踪状态；
export default counter;