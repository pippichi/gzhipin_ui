// 包含n个reducer函数：根据老的state和指定的action返回一个新的state

import {combineReducers} from "redux"

function test(state=0, val){
    return state
}

export default combineReducers({
    test
})