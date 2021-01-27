import {createStore} from "redux";

//redux is simpel function!!
//state,subscribe,dispatch 요게 끝!

const ADD ="ADD";
const DELETE="DELETE";


//actionCreater
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

//실질적으로 store 데이터를 수정하는곳..reducer
//store에 리턴되는 값은 기존의 데이터가 아닌 새로운 데이터여야한다.
//store에 코어라고 보면 되는데 외부에서 store에 데이터를 변경하기 위해선 
//이 reducer에게 액션을 보내야한다.인자는 무조건 현재어ㅠ플리케이션의state와 action을 갖는다
const reducer = (state=[],action)=>{
    switch(action.type){
        case ADD:
            return [{text:action.text,id:Date.now()},...state];
        case DELETE:
            return state.filter(toDo=>toDo.id!==action.id);
        default:
            return state
    }

}

//reducer는 무조거 함수여야 한다.

const store= createStore(reducer);

export const actionCreators={
    addToDo,
    delToDo
}

export default store;