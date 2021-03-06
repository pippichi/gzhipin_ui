/* 
包含n个action creator
异步action
同步action
*/

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types"

import { registerAPI } from "../api/user_api"


const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

export const register = (user) => {
    const {username,
    password,
    confirm_password,
    type} = user
    const type_num = type === "dashen" ? 1 : 2
    if (password !== confirm_password){
        return errorMsg("2次密码不一致！")
    }
    if (!username){
        return errorMsg("必须指定用户名!")
    }
    return async dispatch => {
        const temp = await registerAPI({username, password, type: type_num})
        const res = temp.data
        if (res.status === 201) {
            dispatch(authSuccess(res.user))
        } else {
            dispatch(errorMsg(res.msg))
        }
    }
}
