import {createStore} from 'redux';


const count_reducer=(PreviousState= {count:0},action)=>{
    switch(action.type){
        case("set"):
        return {count: action.to}
        break;
        case("inc"):
        return {count: PreviousState.count+action.by}
        break;
        case("dec"):
        return {count: PreviousState.count-action.by}
        break;
        case("reset"):
        return {count: 0}
        break;
        default:
        return PreviousState;
        break;
    }
}

const state=createStore(count_reducer);

state.subscribe(()=>{
    console.log(state.getState());
});

const increase_count=({by=1}={})=>({
    type:"inc",
    by:by
});
const decrease_count=({by=1}={})=>({
    type:"dec",
    by:by
});
const reset_count=()=>({
    type:"reset",
});

const set_count=(to=100)=>({
    type:"set",
    to
});



state.dispatch(increase_count({by:5}));
state.dispatch(set_count(500));

state.dispatch(increase_count());
state.dispatch(decrease_count({by:9}));
state.dispatch(reset_count());


/////////

