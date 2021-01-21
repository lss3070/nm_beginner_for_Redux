import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";

function ToDo({text,onBtnClick,id}){
return (
<li>
    <Link to={`/${id}`}>
        {text}<button onClick={onBtnClick}>DEL</button>
    </Link>
</li>
);
}

function mapDispatchToProps(dispatch,ownProps){

    return {

        onBtnClick:()=>{
            return dispatch(actionCreators.delToDo(ownProps.id))
        }
        //daddToDo는 새롭게 선언한 props
    }

}
export default connect(null,mapDispatchToProps)(ToDo);