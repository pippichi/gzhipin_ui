// 包含n个reducer函数：根据老的state和指定的action返回一个新的state

import { combineReducers } from "redux"

const initUser = {
    username: "",
    type: "",
    msg: ""
}

function user(state = initUser, action) {
    switch (action.type) {

        default:
            return state
    }
}


export default combineReducers({
    user
})