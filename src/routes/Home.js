import React,{useState} from "react";
import { act } from "react-dom/test-utils";
import {connect} from "react-redux";
import ToDo from "../components/ToDo";
import {actionCreators} from "../store";

function Home({toDos,daddToDo}){
    const [text,setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        daddToDo(text);
        setText("");
    }

  
    return (<>
    <h1>To Do</h1>
    <form onSubmit= {onSubmit}>
        <input type="text"value={text} onChange={onChange}/>
        <button>Add</button>
    </form>
    <ul>
    {toDos.map(toDo=> (
    <ToDo {...toDo} key={toDo.id} />
    ))}
    </ul>
    </>)
}

function mapStateToProps(state){
    console.log(state);
    return {toDos:state}
}

function mapDispatchToProps(dispatch,ownProps){
    return {
        //daddToDo는 새롭게 선언한 props
        daddToDo:(text)=>dispatch(actionCreators.addToDo(text))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)



//mapdispatchprops,mapstatetoprops