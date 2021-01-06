import ajax from "./ajax"
const prefix = "/api1/"

// export function registerAPI(data){
//     return axios.request({
//         url: prefix + "user",
//         method: "post",
//         data
//     })
// }

export const registerAPI = (data) => ajax(prefix + "user", data, "POST")