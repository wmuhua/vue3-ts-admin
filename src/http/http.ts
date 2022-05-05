import request from "./request";
const http = new request({
    baseURL:'http://42.193.158.170:8098',
    // baseURL:'http://localhost:8089',
    timeout:10000
})
export default http;