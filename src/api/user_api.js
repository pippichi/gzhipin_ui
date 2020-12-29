import axios from "axios"

const prefix = "/api1/"

export function registerAPI(data){
    return axios.request({
        url: prefix + "user",
        method: "post",
        data
    })
}