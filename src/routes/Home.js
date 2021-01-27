import React,{useState} from "react";
import { act } from "react-dom/test-utils";
import {connect} from "react-redux";
import ToDo from "../components/ToDo";
import {actionCreators} from "../store";


//export 되는 메인 함수에 내용을 정리한다.
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
    {toDos.map(toDo=> {
        console.log(toDos)
        (<ToDo {...toDo} key={toDo.id} />)}
    )}
    </ul>
    </>)
}


//공통스토어에 저장되어있는걸 지역변수인 todos로 받아줌
//이걸 쓰는건 redux store에서 뭔가를 가지고 올때..
function mapStateToProps(state){
    return {toDos:state}//전역 store안의 toDos에 state넣는다
}


function mapDispatchToProps(dispatch,ownProps){
    return {
       //dispatch로 전달될 파라미터를 daddToDo로 한번더 덮어서~~
       //daddToDo가 하는일은 dispatch를 가져옴 
    //그 dispatch는 actioncreators를 가져오고 addtodo메서드를 가져오지
        daddToDo:(text)=>dispatch(actionCreators.addToDo(text))
    }
}
//커링을 이용하여 구현해놓은것,subscribe기능인것 같음
//connect는 Home으로 보내는 props에 추가될 수 있도록 허용해주는것
export default connect(mapStateToProps,mapDispatchToProps)(Home)



//mapdispatchprops,mapstatetoprops