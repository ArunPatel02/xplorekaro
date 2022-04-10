import axios from "axios"

let token = localStorage.getItem("token")

const AxiosInstance = axios.create({
    baseURL : `http://localhost:8000/api`,
    // headers : {
    //     Authorization : `Barer ${token}`
    // }
})

AxiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = localStorage.getItem("token");
    config.headers["Authorization"] = "Barer " + token;
    return config;
  });

export default AxiosInstance