import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";//subscribe변동사항에 대해 알려주는 놈
import store from "./store";
import App from "./components/App";

ReactDOM.render(
    //Provider는 공통적으로 사용하는 스토리지..
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById("root")
)