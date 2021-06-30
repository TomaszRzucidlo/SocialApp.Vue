import axios from "axios";
import jwtService from "./jwtService";

export const setHeader = () => {
  axios.interceptors.request.use((config)=>{
    config.headers['Authorization'] = 'Bearer ' + jwtService.getToken();
    return config;
    },(error)=>{
      console.log(error);
  });
}

export const handleResponse = () => {
  axios.interceptors.response.use(function (response) {
    return response;
    }, function (error) {
      /// if response.status === 401 then logout
      console.log(error)
    return Promise.reject(error);
    });
}

export default { setHeader, handleResponse };