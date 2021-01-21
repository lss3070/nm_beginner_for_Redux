import {createStore} from "redux";

const ADD ="ADD";
const DELETE="DELETE";

 const addToDo=(text)=>{
    return {
        type:ADD,
        text
    }
}
 const delToDo=(id)=>{
    return {
        type:DELETE,
        id:parseInt(id)
    }
}

const reducer = (state=[],action)=>{
    switch(action.type){
        case ADD:
            console.log(action.text);
            return [{text:action.text,id:Date.now()},...state];
        case DELETE:

            return state.filter(toDo=>toDo.id!==action.id);
        default:
            return state
    }

}
const store= createStore(reducer);

export const actionCreators={
    addToDo,
    delToDo
}

export default store;