import API_URL from "./config";
import axios from 'axios';
import interceptor from "./interceptor";
//mport './interceptor';
const apiService = {
    post(resource, user){
        interceptor.setHeader();
        return axios.post(`${API_URL}api/${resource}`, user);
    },
    get(resource, params=""){
        interceptor.setHeader();
        return axios.get(`${API_URL}api/${resource}/${params}`)
    }
}

export default apiService;