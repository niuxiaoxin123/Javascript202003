import * as Types from "../action-types";
// 把数据作为公共的数据；
let initState ={
    sliders:null,
    activity:null,
    hotData:null
};
function homeReducer(state=initState,action){
    // state空间地址发生改变才会引发视图的更新；
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case Types.HOME_INIT:
            let {sliders,activity}=action.data;
            state.sliders = sliders;
            state.activity=activity;
            break;
        case Types.HOME_HOT:
            state.hotData=action.data;
            break;
    }
    return state;
}
export default homeReducer;