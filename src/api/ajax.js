import axios from "axios"

export default function ajax(url, data = {}, type = "GET") {
    if (type === "GET") {
        let paramStr = ""
        Object.keys(data).forEach(key => {
            paramStr += key + "=" + data[key] + "&"
        })
        if (paramStr) {
            paramStr = paramStr.substring(paramStr.length - 1)
        }

        return axios.request({
            url: url + "?" + paramStr,
            method: type,
        })
    } else {
        return axios.request({
            url,
            method: type,
            data
        })
    }
}