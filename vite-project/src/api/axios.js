import axios from 'axios';

import requestInterceptor from './interceptors/requestInterceptor';
import responseInterceptor from './interceptors/responseInterceptor';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers: {
        "Content-Type": "application/json",
    }
})


// Register interceptors
requestInterceptor(instance);
responseInterceptor(instance);


export default instance;