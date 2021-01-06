import ajax from "./ajax"
const prefix = "/api1/"

// export function registerAPI(data){
//     return axios.request({
//         url: prefix + "users",
//         method: "post",
//         data
//     })
// }

export const registerAPI = (data) => ajax(prefix + "users", data, "POST")