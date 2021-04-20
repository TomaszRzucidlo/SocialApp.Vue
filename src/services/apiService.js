import API_URL from "./config";
import axios from 'axios';

const apiService = {
    post(resource, user){
        return axios.post(`${API_URL}${resource}`, user);
    }
}

export default apiService;