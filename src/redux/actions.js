/* 
包含n个action creator
异步action
同步action
*/

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types"

import { registerAPI } from "../api/user_api"

export const register = (user) => {
    return async dispatch => {
        const temp = await registerAPI(user)
        const res = temp.data
        if (res.code === 0) {

        } else {

        }
    }
}
