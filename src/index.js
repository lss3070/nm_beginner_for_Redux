

import {createStore} from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const form = document.querySelector("form");
const pushbtn = document.getElementById("plus")
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD="ADD";
const MINUS ="MINUS"

const countModifier = (count =0,action)=>{

  switch(action.type){
    case ADD:
      return count+1;
    case MINUS:
      return count-1;
      default:
        return count;
  }
};

const ADD_TODO="ADD_TODO";
const DELETE_TODO="DELETE_TODO"

const arrayReducer=(state=[],action)=>{
  console.log(state);
    switch(action.type){
      case ADD_TODO:
        const newToDoObj={text:action.text,id:Date.now()}
        return [newToDoObj,...state];
      case DELETE_TODO:
        const cleaned=state.filter(e=>e.id!==parseInt(action.id))
        return cleaned;
      default:
        return state;
    }
}
const arrayStore =createStore(arrayReducer);


const addToDo=(text)=>{
  return{
    type:ADD_TODO,
    text:text
  }
}
const delToDo=(id)=>{
  return{
    type:DELETE_TODO,
    id:id
  }
}

const paintToDos=()=>{
  const toDos = arrayStore.getState();
  ul.innerHTML="";

  toDos.forEach(e=>{
    const li= document.createElement("li"); 
    const btn =document.createElement('button');
    btn.addEventListener("click",dispatchdelToDo)
    li.id=e.id;
    li.innerHTML=e.text;
    btn.innerText="del";
    
    li.appendChild(btn);
    ul.appendChild(li);
  });

}
arrayStore.subscribe(paintToDos)


const dispatchaddToDo=(text)=>{
  arrayStore.dispatch(addToDo(text));
}
const dispatchdelToDo=(e)=>{
  arrayStore.dispatch(delToDo(e.target.parentNode.id));
}


const onSubmit=e=>{
  e.preventDefault();
  
  const toDo = input.value;
  input.value=""; 
  dispatchaddToDo(toDo);
}

pushbtn.addEventListener("click",onSubmit)



const countStore = createStore(countModifier);
const onChange = ()=>{
  number.innerHTML=countStore.getState()
}
countStore.subscribe(onChange);
const handleAdd=()=>{
  countStore.dispatch({type:ADD})
}





plus.addEventListener("click",handleAdd);
minus.addEventListener("click",()=>countStore.dispatch({type:MINUS})  );



